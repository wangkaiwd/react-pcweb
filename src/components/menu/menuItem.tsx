import React, { FC, LiHTMLAttributes } from 'react';
import classNames from 'classnames';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  index?: number;
  disabled?: boolean;
}

const clsPre = 'enjoy-menu-item';
const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, className, disabled, ...rest } = props;
  const cls = classNames(
    className,
    clsPre,
    { disabled }
  );
  return (
    <li className={cls} {...rest}>
      {children}
    </li>
  );
};

export default MenuItem;
