##webpack 打包js练习1
webpack打包支持三种js模块规范：esmodule/ commonJS/AMD
1.使用esmodules方式使用js；
    sum.js
2.使用commonJS方式使用js；
    minus.js
3.使用AMD方式使用js；
    multi.js
注意： 由于AMD采用异步方式加载，所以打包回出现一个针对amd规范的bundle文件