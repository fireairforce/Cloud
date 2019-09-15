/* config-overrides.js */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
  removeModuleScopePlugin,
  addWebpackPlugin
} = require("customize-cra");
// const QiniuWebpackPlugin = require('qiniu-webpack-plugin');

const { resolve } = require("path");
const ENV = process.env.NODE_ENV;
const { Qiniu } = require('./pushConfig');
// const QiNiuPlugin = new QiniuWebpackPlugin({Qiniu});
// 关闭sourcemap
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: "[local]--[hash:base64:5]"
  }),
  addWebpackAlias({
    ["utils"]: resolve(__dirname, "./src/utils"),
    ["pages"]: resolve(__dirname, "./src/pages"),
    ["assets"]: resolve(__dirname, "./src/assets"),
  }),
  // 其实这个并不是很需要
  addDecoratorsLegacy(),
  // 解决了一个create-react-app引入bug
  removeModuleScopePlugin(),
);