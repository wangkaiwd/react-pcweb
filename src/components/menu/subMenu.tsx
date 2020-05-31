import React, {
  FC,
  FunctionComponentElement,
  HTMLAttributes,
  useContext,
  useState,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
import { MenuContext } from "./menu";

interface SubMenuProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  title: string;
}

const clsPre = "enjoy-sub-menu";
const SubMenu: FC<SubMenuProps> = (props) => {
  const { children, className, title, name, ...rest } = props;
  const menuContext = useContext(MenuContext);
  const defaultExpanded = menuContext.defaultOpenNames
    ? menuContext.defaultOpenNames.includes(name)
    : false;
  const [expanded, setExpanded] = useState(defaultExpanded);
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
    setExpanded(!expanded);
  };
  const onMouseEnter = () => {
    setExpanded(true);
  };
  const onMouseLeave = () => {
    setExpanded(false);
  };
  const listener =
    menuContext.mode === "vertical"
      ? { onClick }
      : { onMouseEnter, onMouseLeave };
  return (
    <div className={cls} {...rest}>
      <div
        className={classNames(`${clsPre}-title`, { expanded })}
        {...listener}
      >
        {title}
        <span>{expanded ? "展开" : "闭合"}</span>
      </div>
      {expanded && <div className={`${clsPre}-popover`}>{renderChildren}</div>}
    </div>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
