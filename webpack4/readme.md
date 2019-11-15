# webpack4.X

## 什么是webpack？
  webpack是一个模块打包工具(webpack is a module bundler)
## 模块是什么？chunk是什么？ asset是什么
* module:在webpack中所有文件都是模块，一个模块会对应一个文件，webpack会通过入口找到所有依赖的模块
* chunk:代码块，一个chunk由多个模块组合而成
* assets: 打包出得资源， 一般和chunk个数相同

## loader是什么？
  loader是一个打包方案，webpack不能识别非js结尾的模块，告知webpack某些特定文件如何打包

## plugin是什么？
  是一个扩展器，丰富了webpack的功能, plugin可以在webpack在运行到某个时刻时做一些事情, 类似生命周期函数似的

## url-loader与file-loader区别
  与file-loader类似， 但可以进行图片压缩，转化出base64字符串，放到bundle文件中，eval（‘base64XXXX’）

## sourcemap是什么？ 原理是啥？sourcemap的值有哪些，区别是啥？
  Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。
   * devtool 属性值：
   * none： 无sourcemap
   * eavl: 通过eval执行， 通过//# souceURL找到代码位置
   * sourcemap: 生成.map文件
   * cheap: 1.不包含列信息, 仅显示第几行;2.仅记录业务代码信息, 不包含第三方代码 
   * module: 包含第三方代码、loader的sourcemap
   * inline: 将.map文件以dataURl嵌入，不单独生存.map文件,放到bundle.js中
 
    开发环境建议： cheap-module-eval-source-map
    生存环境：cheap-module-source-map

## hot module reload
  * plugin中添加 new webpack.HotModuleReplacementPlugin();
  * webpack-dev-server中添加hot参数
  * js代码中添加if (module.hot) {module.hot.accept('文件', () => {})}
  * css-loader中已经添加了hrm，所以写css的时候不需要写js那些东西

## babel原理, babel语法树原理, babel中的preset与plugin区别


## tree shaking
  tree shaking仅支持es module方式,， 因为es module底层为静态的引用
  development模式下：
  * 在配置文件中添加optimization配置，
  * package中添加sideEffects, 排除不需要tree shaking的代码
  production模式下， 直接进行了tree shaking

## code spliting
  * 同步代码分割： 只需要在optimization中进行配置, chunks+minSize+minchuks+ cacheGroups等等
  * 异步代码： 无需进行任何配置，即可自动拆分（需要bable 对应的plugin）

## Chunk是什么， 懒加载实现方式， 懒加载原理
  * 通过import语法实现懒加载， 返回一个promise（相当于需要使用polyfill）
  [懒加载实现原理](https://segmentfault.com/a/1190000020233387?utm_source=tag-newest)


## webpack prefetch preloading
  * import(/* webpackPrefetch:true */'./module.js') 等核心代码加载完成，在空闲时间在加载 module.js文件
  * import(/* webpackPreload:true */'./module.js')

## webpack浏览器缓存
  * 通过webpack code spliting +  生成文件名称 contenthash, 对部分文件进行缓存
  * 当存在文件内容没改变，但contenthash值每次都会改变， 可能是由于旧版本的webpack manifest导致的， 进行提取一个manifest即可避免这个问题

# webpack hash chunkhash contenthash

## webpack shaming（垫片）
  在配置文件中定义，对应对象的引用
  ```
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ```

## 浏览器查看文件利用率作为衡量页面性能标准之一

## 打包原理


## webpack 提升打包速度方式
  1.webpack版本越新速度越快
  2.node版本越高，速度越快
  3.减少打包体积， babel打包时可以使用 useBuildIns减少代码体积


## npm发包流程
  * npm adduser, 输入用户名密码
  * npm publish
  * npm install

  