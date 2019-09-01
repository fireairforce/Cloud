/* config-overrides.js */
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackAlias({
    ['utils']:resolve(__dirname,'./src/utils'),
    ['pages']:resolve(__dirname,'./src/pages')
  })
);