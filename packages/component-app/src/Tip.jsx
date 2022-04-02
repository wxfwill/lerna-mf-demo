/*
 * @Author: will
 * @Date: 2022-04-02 12:15:55
 * @LastEditTime: 2022-04-02 14:17:44
 * @LastEditors: will
 * @Description:
 */
import React from "lib-app/react";
import "./tip.css";

export default class ToolTip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tool-tip" data-content={this.props.message}>
        {this.props.content}
      </div>
    );
  }
}
