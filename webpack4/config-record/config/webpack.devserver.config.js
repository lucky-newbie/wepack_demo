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
   historyApiFallback: true, // 当在服务器上找不到对应路径时，会使用根路径地址
   overlay: true, // 当出现编译错误的时候， 会直接在浏览器中显示出来
   proxy: {
     '/api': {
       target: 'http://localhost:3000',
       changeOrigin: true, // 有的网站会限制反爬虫，则需要增加该属性
       secure: true, // 转发到https时使用
       headers: {}
     }
   }
 }
