/*
 * @Author: will
 * @Date: 2022-04-02 12:21:37
 * @LastEditTime: 2022-04-02 12:26:04
 * @LastEditors: will
 * @Description:
 */
/*
 * @Author: will
 * @Date: 2022-04-02 11:30:05
 * @LastEditTime: 2022-04-02 12:03:21
 * @LastEditors: will
 * @Description:
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  resolve: {
    extensions: [".jsx", "js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        // include: resolve("src"),
        type: "asset",
        generator: {
          // 输出文件位置及文件名
          filename: "img/[name][contenthash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024, // 超过50kb不转base64
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "component_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.jsx",
        "./ToolTip": "./src/Tip.jsx",
        "./Logo": "./src/Logo.jsx",
      },
      remotes: {
        "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
