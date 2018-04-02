import base from './css/base.css';
import './css/common.css';

// 通过使用style-loader/useable,可使用base对象方法
// base.use(); //使用css 
// base.unuse(); //不使用css

// var flag = false;
// setInterval(function(){
//     if (!flag) {
//         base.use();
//         flag = true;
//     } else {
//         base.unuse();
//         flag = false;
//     }
// }, 1000)

const app = document.getElementById('app');
app.innerHTML = '<div class="box "></div>'
// app.innerHTML = '<div class="' + base.box + '"></div>'
// app.innerHTML = '<div class="' + base.bigBox + '"></div>'

// 注意：import与（）中间不能有空格
// import(/*webpackChunkName:'a'*/ './components/a').then(function(){
//     console.log('异步加载js,js中引入css');
// })
