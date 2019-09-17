/* config-overrides.js */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
  removeModuleScopePlugin,
  addWebpackPlugin,
  setWebpackPublicPath
} = require("customize-cra");
const QiniuPlugin = require('qn-webpack');

const { resolve } = require("path");
const ENV = process.env.NODE_ENV;

const { qn } = require('./pushConfig');
const qiniuPlugin = new QiniuPlugin(qn);
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
  // ENV==='production' && setWebpackPublicPath('http://wdlj.zoodmong.xin/'),
  ENV==='production' && addWebpackPlugin(qiniuPlugin), 
  );