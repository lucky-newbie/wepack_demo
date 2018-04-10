# webpack 搭建开发服务器；
# 基于之前已搭建demo进行练习 webpack 搭建服务器
搭建方式三种方式：
    1.webpack watch mode(此种不会搭建web服务器，需自己搭建服务器)
    2.webpack-dev-server(官方提供)
    3.express + webpack-dev-middleware（此方式更灵活，但自定义安装/配置相对更多）

使用方式：
    1.wepack watch mode(修改文件的时候，会自动监听文件变化，自动打包)
    直接运行命令，添加-w参数，webpack -watch/ webpack -w, 可增加参数如progress color 
    如：webpack -w --progress --color

    2.webpack-dev-middleware
        提供如下功能：
            a.live reloading(代码改变后，自动刷新浏览器);
            b.路径重定向;
            c.支持https;
            d.浏览器中显示编译错误；
            e.接口代理；
            f.模块热更新;
        使用方式：   webpack中添加devServer配置，参数如：
            inline：默认未true， 是否使用ifrme方式或inline方式
            contentBase：指定路径, 默认为当前工作路径
            port： 端口
            historyApiFallback: 指定rewrite路径
            https：
            proxy：接口代理；
            hot： 是否模块热更新；
            openpage： 指定webpack打开的初始页面
            lazy：webpack devserver懒模式，只有使用的时候才会会打包对应的模块, 适用于多页面应用
            overlary: (遮罩)给出编译错误提示, 在打开的页面中显示错误信息


            注意： 需使用webpack-dev-server2.X版本，3.X版本供webpack4.X使用
