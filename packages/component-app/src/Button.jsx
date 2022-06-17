/*
 * @Author: will
 * @Date: 2022-04-02 12:14:34
 * @LastEditTime: 2022-04-02 12:18:10
 * @LastEditors: will
 * @Description:
 */
import React from "lib-app/react";
const styleMapping = {
  primary: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#409eff",
    borderColor: "#409eff",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer",
  },
  warning: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#e6a23c",
    borderColor: "#e6a23c",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer",
  },
};
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleParent = this.handleParent.bind(this);
  }
  handleParent = () => {
    console.log(this);
    this.props?.msgInfo("===按钮告诉父级元素的哈");
  };
  render() {
    var type = this.props.type || "primary";
    return (
      <button style={styleMapping[type]} onClick={this.handleParent}>
        {type} Button
      </button>
    );
  }
}
