/**
 * webpack devserver config
 * 
 * 1.webpack --watch 监听文件改变
 */

 const path = require('path');

 module.exports = {
   contentBase: path.resolve(__dirname, '../dist'),
   open: true,
   hot: true,
   hotOnly: true,
   historyApiFallback: true, // 当找不到对应路径时，跳转到根路径
   proxy: {
     '/api': {
       target: 'http://localhost:3000',
       changeOrigin: true
     }
   }
 }
