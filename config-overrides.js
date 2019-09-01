/* config-overrides.js */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy
} = require("customize-cra");
const { resolve } = require("path");

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
    ["pages"]: resolve(__dirname, "./src/pages")
  }),
  // 其实这个并不是很需要
  addDecoratorsLegacy()
);
