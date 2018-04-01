#webpack htmlWebpackPlugin
#可自动生成html
#可对项目进行优化，

1.HtmlWebpackPlugin,配置参数示例：
    options: template
             filename
             minify
             chunks
             inject
2.使用htmlwebpackplugin生成html
3.使用html-loader，在html中引入图片
    attrs: [img: src]
  ps: 使用图片的时候，需要使用url-loader/fil-loader

4.webpack配合优化
    提前载入webpack加载代码， 可使用如下两个插件：
    inline-manifest-webpack-plugin
    html-webpack-inline-chunk-plugin