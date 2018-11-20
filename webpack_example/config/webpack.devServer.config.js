const path = require('path');
module.export = {
  contentBase: path.resolve(__dirname, 'dist'), // 指明当前文件位置
    compress: true, // 进行Gzip压缩
    quiet: false, //true: 不可见；false：可见； 除了初始启动信息之外的任何内容都不会被打印到控制台
                  // 这也意味着来自 webpack 的错误或警告在控制台不可见
    host: 'localhost',
    port: 3002,
    publicPath: '',
    hot: true, // 是否启用热加载（HMR）
    hotOnly: false // HMR时是否刷新浏览器，true：不刷新； false：刷新
}