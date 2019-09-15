/* config-overrides.js */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addPostcssPlugins,
  addDecoratorsLegacy,
  removeModuleScopePlugin
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
    ["pages"]: resolve(__dirname, "./src/pages"),
    ["assets"]: resolve(__dirname, "./src/assets"),
  }),
  // 其实这个并不是很需要
  addDecoratorsLegacy(),
  // 解决了一个create-react-app引入bug
  removeModuleScopePlugin(),
  addPostcssPlugins([require("postcss-px-to-viewport")
  ({
    unitToConvert: 'px',
    viewportWidth: 1080,
    unitPrecision: 5,
    propList: ['*'],
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    selectorBlackList: ['ant'],
    minPixelValue: 1,
    mediaQuery: false,
    replace: true,
    exclude: [],
    landscape: false,
    landscapeUnit: 'vw',
    landscapeWidth: 568
  })])
);
