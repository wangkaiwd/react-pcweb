import React, { useState } from 'react';
import Button, { ButtonSize, ButtonType } from './components/button/button';
import MenuItem from './components/menu/menuItem';
import Menu from './components/menu/menu';

const App = () => {
  const [index, setIndex] = useState('0');
  return (
    <div className="App">
      <Menu selectedIndex={index} onSelect={(index) => {setIndex(index);}}>
        <MenuItem index="0">mneu1</MenuItem>
        <MenuItem index="1">mneu2</MenuItem>
        <MenuItem index="2">mneu3</MenuItem>
      </Menu>
      <Button target="_blank" btnType={ButtonType.Link} href="https://www.baidu.com">
        Baidu Link
      </Button>

      <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">
        Disabled Link
      </Button>

      <Button className="custom" btnType={ButtonType.Primary}>
        Primary
      </Button>
      <Button disabled btnType={ButtonType.Primary}>
        Disabled Primary
      </Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
        Danger
      </Button>
      <Button>
        Default
      </Button>
    </div>
  );
};

export default App;
