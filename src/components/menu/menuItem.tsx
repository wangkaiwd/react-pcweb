import React, { FC, LiHTMLAttributes, useContext } from 'react';
import './menuItem.scss';
import classNames from 'classnames';
import { MenuContext } from './menu';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  index: string;
  disabled?: boolean;
}

const clsPre = 'enjoy-menu-item';
const MenuItem: FC<MenuItemProps> = (props) => {
  const { currentIndex, onSelect } = useContext(MenuContext);
  const { children, className, disabled, index, ...rest } = props;
  const cls = classNames(
    className,
    clsPre,
    {
      active: index === currentIndex,
      disabled
    }
  );
  const onClick = () => {
    if (onSelect) {
      onSelect(index);
    }
  };
  return (
    <li className={cls} {...rest} onClick={onClick}>
      {children}
    </li>
  );
};

export default MenuItem;
