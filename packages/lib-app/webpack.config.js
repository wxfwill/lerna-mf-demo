/*
 * @Author: will
 * @Date: 2022-04-01 15:49:42
 * @LastEditTime: 2022-04-02 15:21:54
 * @LastEditors: will
 * @Description:
 */

const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:3000/",
    clean: true,
  },
  // cache: {
  //   type: "filesystem",
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: "lib_app",
      // library: { type: "var", name: "lib_app" },
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom/client",
      },
    }),
  ],
};
