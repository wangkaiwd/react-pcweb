import React, {
  FC,
  FunctionComponentElement,
  HTMLAttributes,
  useState,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

interface SubMenuProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  title: string;
}

const clsPre = "enjoy-sub-menu";
const SubMenu: FC<SubMenuProps> = (props) => {
  const { children, className, title, ...rest } = props;
  const [expand, setExpand] = useState(false);
  const cls = classNames(clsPre, className);
  const renderChildren = React.Children.map(children, (child) => {
    const childElement = child as FunctionComponentElement<MenuItemProps>;
    if (childElement.type.displayName === "MenuItem") {
      return childElement;
    } else {
      console.error(
        "Warning: Menu has a child which is not a MenuItem component"
      );
    }
  });
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <div className={cls} {...rest}>
      <div
        className={classNames(`${clsPre}-title`, { expand })}
        onClick={onClick}
      >
        {title}
        <span>{expand ? "展开" : "闭合"}</span>
      </div>
      {expand && renderChildren}
    </div>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
