/**
 *  插件定义为一个类
 */

 class CopyWebpackPlugin {
   constructor(options) {
    console.log('插件被实例话', options)
   }

   /** 调用插件的时候，会调用apply方法, 接收一个compiler参数 */
   apply(compiler) {
    console.log('**************自定义plugin************************')
    compiler.hooks.emit.tapAsync('CopyWebpackPlugin', (compilation, cb) => {
      console.log('XXXXX');
      cb();
    })
  }
 }

 module.exports = CopyWebpackPlugin;