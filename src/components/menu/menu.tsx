import React, { createContext, FC, FunctionComponentElement } from "react";
import "./menu.scss";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "vertical" | "horizontal";
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultSelectName?: string;
  className?: string;
  selectedName?: string;
  mode?: MenuMode;
  onSelect?: SelectCallback;
}

// 跨组件传参，通过Context来实现
interface IMenuContext {
  currentName?: string;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({});
const clsPre = "enjoy-menu";
const Menu: FC<MenuProps> = (props) => {
  const {
    mode = "horizontal",
    children,
    className,
    defaultSelectName,
    selectedName,
    onSelect,
    ...rest
  } = props;
  const currentName = selectedName || defaultSelectName || "";
  const cls = classNames(className, clsPre, {
    [`${clsPre}-vertical`]: mode === "vertical",
    [`${clsPre}-horizontal`]: mode === "horizontal",
  });
  const passContext: IMenuContext = {
    currentName,
    onSelect,
  };
  const renderChildren = () => {
    // 在children内包含的每个直接子元素上调用一个函数，函数的this为thisArg
    // https://reactjs.org/docs/react-api.html#reactchildren
    // this.props.children 包含各种类型：数组，函数，或者null/undefined
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return childElement;
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <MenuContext.Provider value={passContext}>
      {/*data-testid：方便测试时获取元素*/}
      <div className={cls} data-testid="test-menu">
        {renderChildren()}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
