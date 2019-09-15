const QiNiuWebpackPlugin = require('qiniu-webpack-plugin');
const { Qiniu } = require('./pushConfig');
const qiniuPlugin = new QiNiuWebpackPlugin(Qiniu);

module.exports = {
    mode:'production',
    output: {
        publicPath:'http://wdlj.zoomdong.xin/'
    },
    plugins:[
        qiniuPlugin
    ]      
}