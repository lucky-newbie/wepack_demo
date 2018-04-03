#webpack 代码分割 + 懒加载
#代码基于webpack3.5中的代码进行练习懒加载

#本demo涉及知识点：
    1.require.ensure() // webpack内置方式实现懒加载
    2.require.include() // 代码分割，公共代码打包
    3.import().then() //es 2015方式实现代码懒加载
    /* 4.commonChunksPlugin中async */

实现懒加载两种方式，一种webpack内置方法,一种es 2015 loader
1.webapck method
    1）require.ensure()
    接受四个参数： []: dependencies
                 callback
                 errorCallBack（该参数可省略）
                 chunkName
    注： require.ensure需依赖promise方法,如果不支持，需添加polyfill进行语法转义
    该方式可以结合react-router动态路由，对项目进行优化，实现懒加载， 如：
        export default {
          path: '/test',
          name:"test", 
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../path/contaner').default);
            }, 'test');
          }
        }
        这样webpack 打包时，就会单独打出test的chunck， 路由只有在访问到/test的时候，才会加载/test路径下模块代码

    2）require.include
        当子模块中都依赖第三方模块时，可将第三方模块在父模块通过该方法打包

2.ES 2015 Loader spec
    import() -> Promise // 通过import方式调用，返会promise对象
    import().then() // 相当于该方式使用

代码分割场景：
    1.分离业务代码 和 第三方依赖
    2.分离业务代码 和 业务公共代码 和 第三方依赖
    3.分离首次加载 和 访问后加载的代码（用于前端优化）


