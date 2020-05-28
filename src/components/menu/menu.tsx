import React, { FC } from 'react';
import classNames from 'classnames';

type MenuMode = 'vertical' | 'horizontal'

interface MenuProps {
  defaultIndex?: number,
  className?: string,
  mode?: MenuMode,
  // onSelect?: (selectedIndex: number) => void
}

const clsPre = 'enjoy-menu';
const Menu: FC<MenuProps> = (props) => {
  const { mode, children, className, ...rest } = props;
  const cls = classNames(className, clsPre, {
    [`${clsPre}-vertical`]: mode === 'vertical',
    [`${clsPre}-horizontal`]: mode === 'horizontal'
  });
  return (
    <ul className={cls} {...rest}>
      {children}
    </ul>
  );
};

export default Menu;
