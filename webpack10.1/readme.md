webpack4.X版本较webpack3.X版本比对
1.增加mode
    mode有三种参数： 
    production
    development
    none（零配置）, 较production模式，改模式未对代码进行压缩混淆等处理
2.commonChunksPlugin改变为： optimization.splitChunks;
3.uglifyjs改变为：optimization.minimizer