import React, { createContext, FC } from "react";
import "./menu.scss";
import classNames from "classnames";

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
    mode,
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
  return (
    <MenuContext.Provider value={passContext}>
      {/*data-testid：方便测试时获取元素*/}
      <ul className={cls} data-testid="test-menu">
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export default Menu;
