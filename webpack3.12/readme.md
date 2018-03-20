#PostCSS
    1.用js transfroming css的工具，在打包过程中进行转化,是一个处理css的工具

    2.安装： postcss  
            postcss-loader
            Autoprefixer: 补充css前缀
            postcss-cssnano: 优化压缩css，在css-loader中就使用该插件对css进行压缩
            postcss-cssnext：使用未来的css语法，比如css 变量，css选择器

#PostCSS插件
    postcss-import
    postcss-url
    postcss-assets 

#可在package.json中添加browserslist， 供autoprefixer 与babel使用
#或在跟路径下添加.browserslistrc文件，添加配置