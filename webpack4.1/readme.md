#webpack n文件处理
文件处理类型：
1 图片处理
    1）css中如何引入图片
        使用插件：file-loader
    2）自动合成雪碧图
        使用插件：postcss-sprites
    3）压缩图片
        使用插件：img-loader
    4）小图片Base64编码
        使用插件：url-loader

2 字体文件
3 第三方JS库

备注：url-loader中打包出来的路径引用似乎存在问题，按照教程中使用，打包路径不对，自己进行了配置修改，原因暂未弄清楚。。

ps: 遇到一个神奇的问题，通过postcss-sprites合成雪碧图的时候，遇到图片无法识别，导致打包不成功，但引用的图片依旧能查看，原因未知呢。。。？