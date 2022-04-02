/*
 * @Author: will
 * @Date: 2022-04-02 11:44:57
 * @LastEditTime: 2022-04-02 15:20:12
 * @LastEditors: will
 * @Description:
 */
import App from "./App.jsx";
import ReactDom from "lib-app/react-dom";

console.log(ReactDom);

const container = document.getElementById("app");
const root = ReactDom.createRoot(container);

root.render(<App></App>);
