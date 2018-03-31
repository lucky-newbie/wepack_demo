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
app.innerHTML = '<div class="box "></div>';

$('#app').addClass('jsClass'); // 引用jquery