import React, { useState } from "react";
import Button, { ButtonSize, ButtonType } from "./components/button/button";
import MenuItem from "./components/menu/menuItem";
import Menu from "./components/menu/menu";
import "./App.scss";
import SubMenu from "./components/menu/subMenu";

const App = () => {
  const [name, setName] = useState("0");
  return (
    <div className="App">
      <Menu
        selectedName={name}
        onSelect={(name) => {
          setName(name);
        }}
      >
        <MenuItem name="1">menu1</MenuItem>
        <MenuItem name="2">menu2</MenuItem>
        <MenuItem name="3">menu3</MenuItem>
      </Menu>
      <Menu
        selectedName={name}
        mode={"vertical"}
        onSelect={(name) => {
          setName(name);
        }}
      >
        <MenuItem name="0">menu1</MenuItem>
        <MenuItem disabled name="1">
          menu2
        </MenuItem>
        <MenuItem name="2">menu3</MenuItem>
        <SubMenu name="4" title={"dropdown"}>
          <MenuItem name="4-1">dropdown1</MenuItem>
          <MenuItem name="4-2">dropdown2</MenuItem>
        </SubMenu>
      </Menu>

      <Button
        target="_blank"
        btnType={ButtonType.Link}
        href="https://www.baidu.com"
      >
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
      <Button>Default</Button>
    </div>
  );
};

export default App;
