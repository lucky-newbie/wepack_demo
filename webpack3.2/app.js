// 使用es modules方式
import sum from './sum';

console.log('sum(23,24', sum(23, 24));

// 使用commonJS方式打包
/**
 * module.exports 方式暴露
 * require方式引用
 */
const minus = require('./minus');

console.log('minus(24, 10)', minus(24, 10));

// 使用AMD方式
require(['./multi'], function(multi) {
    console.log('multi(2, 3)= ', multi(2, 3));
})