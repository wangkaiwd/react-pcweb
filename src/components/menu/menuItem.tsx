import React, { FC, LiHTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  disabled?: boolean;
}

const clsPre = "enjoy-menu-item";
const MenuItem: FC<MenuItemProps> = (props) => {
  const { currentName, onSelect } = useContext(MenuContext);
  const { children, className, disabled, name, ...rest } = props;
  const cls = classNames(className, clsPre, {
    active: name === currentName,
    disabled,
  });
  const onClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };
  return (
    <li className={cls} {...rest} onClick={onClick}>
      {children}
    </li>
  );
};

export default MenuItem;
