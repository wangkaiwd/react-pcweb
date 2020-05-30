import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";

const testProps: MenuProps = {
  defaultSelectName: "0",
  onSelect: jest.fn(),
  className: "test",
};
const generateMenu = (props: MenuProps) => (
  <Menu selectedName={"0"} {...props}>
    <MenuItem name="0">active</MenuItem>
    <MenuItem name="1" disabled>
      disabled
    </MenuItem>
    <MenuItem name="2">menu3</MenuItem>
  </Menu>
);

let disabledElement: HTMLElement;
let activeElement: HTMLElement;
let wrapper: RenderResult;
let menuElement: HTMLElement;
describe("Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render Menu and MenuItem based on default props", function () {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("enjoy-menu test");
    expect(menuElement.getElementsByTagName("li").length).toBe(3);
    expect(activeElement).toHaveClass("enjoy-menu-item active");
    expect(disabledElement).toHaveClass("enjoy-menu-item disabled");
  });
  // todo: 受控组件和非受控组件的问题
  it("should click items change active and call the right callback", function () {
    const thirdItem = wrapper.getByText("menu3");
    fireEvent.click(thirdItem);
    expect(testProps.onSelect).toBeCalledWith("2");
    // expect(thirdItem).toHaveClass('active');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("active");
    // expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it("should render correct mode", function () {
    cleanup();
    const wrapper = render(generateMenu({ mode: "vertical" }));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("enjoy-menu-vertical");
  });
});
