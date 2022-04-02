/*
 * @Author: will
 * @Date: 2022-04-02 11:45:59
 * @LastEditTime: 2022-04-02 15:02:01
 * @LastEditors: will
 * @Description:
 */
import React from "lib-app/react";
import Logo from "component-app/Logo";
import Button from "component-app/Button";
import Tip from "component-app/ToolTip";
import "./app.css";

const App = () => {
  return (
    <div className="main-app">
      <h6>z主应用程序</h6>
      <h3>Hi World</h3>
      <div className="child-app">
        <Logo></Logo>
        <Button></Button>
        <Tip content="提示按钮" message="干啥提示"></Tip>
      </div>
    </div>
  );
};

export default App;
