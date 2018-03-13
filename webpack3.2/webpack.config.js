module.exports = {
    entry: {
        'app': './app.js' // 文件打包入口
    },
    output: {
        // 参数： name： 文件名称， hash：hash值
        filename: '[name].[hash:5].js' // 文件输出名称
    },

}