import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

const App = () => (
  <div className="App">
    <Button btnType={ButtonType.Link} href="https://www.baidu.com">
      Baidu Link
    </Button>

    <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">
      Disabled Link
    </Button>

    <Button btnType={ButtonType.Primary}>
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
