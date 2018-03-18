// import './subPageA'; // 同步加载
// import './subPageB' // 同步加载方式

// import * as _ from 'lodash';

//************以上为webpack3.5练习代码 */

// 通过require.include()方法将，子模块中公共moduleA提取出来
require.include('./moduleA');

// 采用import方式动态引入
/**
 * import(依赖).then();
 * 在依赖中通过加注释： webpackChunkName： ‘name'方式 给定chunk name
 * 如果多个import指定的chunk name相同，则会将不同的依赖都打入到同一个chunk 中
 */
import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function(pageA) {
    console.log(pageA)
})

// 懒加载方式1, 采用require.ensure方式加载subPageA/subPageB/lodash
/**
 * require,ensure方法四个参数：
 * 【】 依赖
 *  callback
 *  errorCallBack(该参数可省略),
 *  chunkname
 */
// require.ensure('./subPageA', function() {
//     var subPageA = require('./subPageA'); // require之后代码才会真正执行
// }, 'subPageA');


require.ensure('./subPageB', function() {
    // var subPageB = require('./subPageB'); // 如果没有require 则代码不会执行
}, 'subPageB');


require.ensure([], function(){
    var _ = require('lodash'); // require之后才会真正的执行
    _.join(['1', '2'], '3');
}, 'vendor')

export default 'PageA';