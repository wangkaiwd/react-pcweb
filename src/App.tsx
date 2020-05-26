import React from 'react';
import Button, { ButtonType } from './components/Button/button';

const App = () => (
  <div className="App">
    <Button btnType={ButtonType.Link} href="https://www.baidu.com">
      Baidu Link
    </Button>

    <Button btnType={ButtonType.Primary}>
      Primary
    </Button>
    <Button btnType={ButtonType.Default}>
      Primary
    </Button>
    <Button>
      Primary
    </Button>
  </div>
);

export default App;
