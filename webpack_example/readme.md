# webpack脚手架示例

## 环境依赖
  * node > 6.0
  * webpack > 4.X

## 命令介绍
  * npm run dev1       // webpack-dev-middleware方式启动开发环境
  * npm run dev2       // node api方式启动开发环境
  * npm run build      // production 打包
  * npm run devServer  // webpack-dev-server cli方式启动， 此方式需要在dev中配置devserver配置

## 目录介绍
```
|-config                          // webpack配置
  |-webpack.dev.config.js
  |-webpack.devServer.config.js
|-node_modules                    // 依赖
|-public                          // 静态文件
|-script                          // 启动服务配置
|-src                             // 源码
```
