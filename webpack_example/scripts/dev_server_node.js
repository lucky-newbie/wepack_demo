/**
 * webpack dev server nodejs方式启动开发环境
 */

 const webpackDevServer = require('webpack-dev-server');
 const webpack = require('webpack');

 const webpackConfig = require('../config/webpack.dev.config');
 const webpackDevServerConfig = require('../config/webpack.devServer.config');

 webpackDevServer.addDevServerEntrypoints(webpackConfig, webpackDevServerConfig); // 指定入口及dev配置
 
 const compiler = webpack(webpackConfig);
 const server = new webpackDevServer(compiler, webpackDevServerConfig);

 server.listen('3001', 'localhost',  () => {
  console.log('dev server listening on port 5000');
 });