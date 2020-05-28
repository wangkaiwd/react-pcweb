import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/button/button';
import MenuItem from './components/menu/menuItem';
import Menu from './components/menu/menu';

const App = () => (
  <div className="App">
    <Menu>
      <MenuItem>mneu1</MenuItem>
      <MenuItem>mneu2</MenuItem>
      <MenuItem>mneu3</MenuItem>
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

export default App;
