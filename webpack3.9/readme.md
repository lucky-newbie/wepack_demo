#webpack打包css
1.style-loader : 通过style标签方式插入css
    option: 
        inserAt（插入位置）:top/bottom
        inserInto（插入到dom）
        singleton（是否只使用一个style标签）
        transform（转化，浏览器环境下，插入页面前）
2.style-loader/url : 像页面中插入link标签(不常用该方式)
3.style-loader/useable: 控制样式是否插入到页面中
    1)webpack中使用style-loader/useable;
    2)在引用css的地方，使用use（）/unuse（）方法
        如： import base from './base.css'
            base.use();  base.unuse();


4.css-loader
    options: 
        alias(别名);
        importLoader(@import)
        Minimize(是否压缩)
        modules(启用css-modules)

5.css-modules
    :local 局部样式
    :global 全局样式
    composes: 继承样式
    composes ... from path 从某个文件中引入某个样式
    localIdentName: '[path].[name]_[local]--[hash:base64:5]' // 改变css 名称
