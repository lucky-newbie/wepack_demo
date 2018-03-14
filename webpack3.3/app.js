// 使用该方式，引用babel-polyfill插件
// 该方式会将所有没有的方法实现放到打包文件中
import 'babel-polyfill'; 


let func = () => {}

const NUM = 45;
let arr = [1,2,4];
let arrB = arr.map(item => item * 2);

arrB.includes(8);
console.log('arrB set:', new Set(arrB));