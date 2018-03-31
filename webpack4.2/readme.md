# webpack处理第三方JS库
# 基于之前代码进行引用第三方js类库;
三种引入方式：
1.webpack.providePlugin
    直接使用webpack.ProvidePlugin插件，在插件中定义模块引用;
2.imports-loader
    通过添加rules， 指定解析某个路径下的模块，使用import-loader，对第三方类库进行定义引用；
3.window
    