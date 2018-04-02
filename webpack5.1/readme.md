# webpack 搭建开发服务器；
# 基于之前已搭建demo进行练习 webpack 搭建服务器
搭建方式三种方式：
    1.webpack watch mode(此种不会搭建web服务器，需自己搭建服务器)
    2.webpack-dev-server(官方提供)
    3.express + webpack-dev-middleware（此方式更灵活，但自定义安装/配置相对更多）

使用方式：
    1.wepack watch mode(修改文件的时候，会自动监听文件变化，自动打包)
    webpack -watch/ webpack -w, 可增加参数如progress color 
    如：webpack -w --progress --color

    2.webpack-dev-middleware
        提供如下功能：
        a.live reloading(代码改变后，自动刷新浏览器);
        b.路径重定向;
        c.支持https;
        d.浏览器中显示编译错误；
        e.接口代理；