// import "@babel/polyfill"; /* 帮助实现一些浏览器不支持的方法、对象, 配置文件中已经使用了useBuiltIns, 则不需要引入 */
import img  from '../url.png';
import classes from './a.scss'; //
import './t.css'; // css 使用方式
import { add } from './add.js';
import number from  './number.js';

import render from './react-test.js';

const A = 111;
console.log(A);

const image = new Image();
image.src = img;
image.classList.add(classes.img);

document.body.appendChild(image)
add();

const array = [
  new Promise((resolve, reject) => {}),
  new Promise((resolve, reject) => {}),
]

array.map(i => {
  console.log(i
  )
})

// 实现hrm， 有的babelpreset或loader已经写了hrm，所以不用写了
if (module.hot) {
  module.hot.accept('./number', () => {
    console.log('mmodule', module)
    number()
  })
}

render('id');

import(/* webpackChunkName:"t" */'./module.js')


function getComponent() {
  return import(/* webpackChunkName:'lazyLoading' */'./moduleB.js').then(() => {
    const div = document.createElement('btn');
    div.innerHTML ='按钮';
    return div;
  })
}

/** 懒加载 */
document.addEventListener('click', function() {
  getComponent().then(ele => {
    document.body.appendChild(ele)
  })
})