import React, { FC, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
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
    <div className={cls} {...rest} onClick={onClick}>
      {children}
    </div>
  );
};
// displayName:https://reactjs.org/docs/react-component.html#displayname
// displayName字符串在调试信息中被使用。通常，你没有必要明确的设置它，因为它会从定义组件的函数名或class名中推断出来。
// 如果为了调试的目的，你想要显示一个不同的名字，或者当你创建一个高阶组件的时候，你可能想要明确的设置它。
// 在包裹显示名称用来易于调试章节查看更多细节
MenuItem.displayName = "MenuItem";
export default MenuItem;
