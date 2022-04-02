/*
 * @Author: will
 * @Date: 2022-04-02 12:14:52
 * @LastEditTime: 2022-04-02 12:33:32
 * @LastEditors: will
 * @Description:
 */
import React from "lib-app/react";
import pictureData from "./img/logo.png";
export default function () {
  return <img src={pictureData} style={{ width: "120px", borderRadius: "10px" }} />;
}
