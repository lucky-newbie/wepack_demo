var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: {
        'pageA': './src/pageA',
        // 由于是单entry，则commonschunkplugin不会起作用
        // 采用require.include方式进行代码分割

        // 'pageB': './src/pageB',
        // 'vendor': ['lodash'] // 指定第三方插件单独打包
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // The publicPath configuration option can be quite useful in a variety of scenarios. 
        // It allows you to specify the base path for all the assets within your application.
        publicPath: './dist/',  // 代码动态加载地址
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [

        ]
    },
    // plugins: [
    //     // 将业务代码中公共出现的部分进行抽取
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'common',
    //         minChunks: 2,
    //         chunks: ['pageA', 'pageB']
    //     }),
    //     new webpack.optimize.CommonsChunkPlugin({
    //         // names: ['vendor', 'mainfest'] // 可使用names参数，将vendor与manifest合并配置
    //         name: 'vendor', // 指定从vender中抽取公共代码
    //         minChunks: Infinity // 不需要重复
    //         // name: 'common', // 公共代码名称为common
    //         // minChunks: 2 // 在所有的chunk中出现2次就打包
    //     }),
    //     // 想将webpack代码独立出来，保持第三方代码纯净，可以在补充一个commonchunkpluginspeizhi 
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'mainfest',
    //         minChunks: Infinity
    //     })

    // ]
}