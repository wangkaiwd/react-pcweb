import React, { createContext, FC } from 'react';
import classNames from 'classnames';

type MenuMode = 'vertical' | 'horizontal'
type SelectCallback = (selectedIndex: string) => void

interface MenuProps {
  defaultIndex?: string,
  className?: string,
  selectedIndex?: string,
  mode?: MenuMode,
  onSelect?: SelectCallback
}

// 跨组件传参，通过Context来实现
interface IMenuContext {
  currentIndex?: string,
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({});
const clsPre = 'enjoy-menu';
const Menu: FC<MenuProps> = (props) => {
  const { mode, children, className, defaultIndex, selectedIndex, onSelect, ...rest } = props;
  const currentIndex = selectedIndex || defaultIndex || '';
  const cls = classNames(className, clsPre, {
    [`${clsPre}-vertical`]: mode === 'vertical',
    [`${clsPre}-horizontal`]: mode === 'horizontal'
  });
  const passContext: IMenuContext = {
    currentIndex,
    onSelect
  };
  return (
    <MenuContext.Provider value={passContext}>
      <ul className={cls}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export default Menu;
