##本次为webpack 打包ES6文件，其中使用babel-loader

#文件结构：
    app.js： es6文件
    webpack.config.js: webpack配置文件
#语法变化由presets指定
###babel 插件

#函数和方法由以下两者处理
1.babel polyfill
    全局垫片，在整个浏览器内，可以直接调用，相当于在全局定义变量/方法，该插件主要为应用准备，而不是未框架准备
    使用： 
    npm install babel-polyfill --save
    import ‘bable-polyfill’
    

2.babel runtime transform
    局部垫片，为开发框架准备，不会污染全局，让局部代码不报错，能够运行
    使用方式：
    1.npm install babel-plugin-transform-runtime --save-dev
      npm install babel-runtime --save
    2.在项目根目录下，创建.babelrc文件，在其中进行配置
    3.将webpack.config.js中关于babel相关的配置移动到.babelrc文件中，以json格式进行配置，增加plugin相关配置，如下：
        {
            "presets": [
                    ["@babel/preset-env", {
                        "targets": {
                            "browsers": ["last 2 version"]
                        }
                    }]
            ] ,
            "plugin": ["@babel/transform-runtime"]
        }

##实际应用开发中可以直接配置presets，需要进行ES6语法转义定义时，可以直接使用babel-polyfill，如果进行框架级别开发，则使用runtime，防止变量污染