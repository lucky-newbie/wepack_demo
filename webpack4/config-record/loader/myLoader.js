/**
 * loader为一个函数
 */
import { getOptions } from 'loader-utils';
module.exports = function(source) {
  const options = getOptions(this);
  const callback = this.async(); // 异步处理
  setTimeout(() => {
    callback(source)
  }, 1000)
  // return source; // 啥都没做， 直接把源码返回
}