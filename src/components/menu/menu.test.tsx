import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";
import SubMenu from "./subMenu";

const testProps: MenuProps = {
  selectedName: "0",
  onSelect: jest.fn(),
  className: "test",
};
const generateMenu = (props: MenuProps) => (
  <Menu {...props}>
    <MenuItem name="0">active</MenuItem>
    <MenuItem name="1" disabled>
      disabled
    </MenuItem>
    <MenuItem name="2">menu3</MenuItem>
    <SubMenu name="3" title={"dropdown"}>
      <MenuItem name="3-1">dropdown1</MenuItem>
      <MenuItem name="3-2">dropdown2</MenuItem>
    </SubMenu>
  </Menu>
);
const createCssFile = () => {
  const style = document.createElement("style");
  const cssString = `
    .enjoy-menu-item.disabled {
      pointer-events: none;
    }
  `;
  style.innerHTML = cssString;
  return style;
};
let disabledElement: HTMLElement;
let activeElement: HTMLElement;
let wrapper: RenderResult;
let menuElement: HTMLElement;
describe("Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    // wrapper.container： 它是render的组件所对应的dom元素
    wrapper.container.appendChild(createCssFile());
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render Menu and MenuItem based on default props", function () {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("enjoy-menu test");
    // :scope属于CSS伪类，它表示作为选择器要匹配的参考点的元素。
    // 当从DOM API使用，如querySelector,querySelectorAll,matches,:scope匹配你调用API的元素
    expect(menuElement.querySelectorAll(":scope > div").length).toBe(4);
    expect(activeElement).toHaveClass("enjoy-menu-item active");
    expect(disabledElement).toHaveClass("enjoy-menu-item disabled");
  });
  // todo: 受控组件和非受控组件的问题
  it("should click items change active and call the right callback", function () {
    const thirdItem = wrapper.getByText("menu3");
    fireEvent.click(thirdItem);
    expect(testProps.onSelect).toBeCalledWith("2");
    // todo: 当组件的状态发生变化时该如何测试？
    // expect(thirdItem).toHaveClass('active');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("active");
    // expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it("should render correct mode", function () {
    // render: Render into a container which is appended to document.body
    // cleanup: Unmounts React tree that were mounted with render
    // 请注意：如果你正在使用的框架(如mocha,Jest和Jasmine)支持全局afterEach，这(cleanup)将会被自动地完成。
    // 如果你的框架不支持全局afterEach，你需要手动做清理(cleanup)在每次测试之后
    cleanup();
    const wrapper = render(generateMenu({ mode: "vertical" }));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("enjoy-menu-vertical");
  });
  it("should show dropdown items when hover on subMenu", async () => {
    const subMenu = wrapper.getByText("dropdown");
    expect(wrapper.queryByText("dropdown1")).toBeNull();
    fireEvent.mouseEnter(subMenu);
    // 需要注意：每次都要重新获取wrapper.queryByText?
    expect(wrapper.queryByText("dropdown1")).toBeVisible();
    expect(subMenu).toHaveClass("expanded");
    fireEvent.mouseLeave(subMenu);
    expect(wrapper.queryByText("dropdown1")).toBeNull();
    expect(subMenu).not.toHaveClass("expanded");
  });
});
