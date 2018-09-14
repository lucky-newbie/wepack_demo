/**
 * 采用node api的方式启动 webpack-devserver
 */
 const port = 3000;
 const host = '127.0.0.1';

 const path = require('path');
 const webpack = require('webpack');
 const webpackDevServer = require('webpack-dev-server');
 const webpackConfig = require('../config/webpack.dev.config');
 const webpackDevServerConfig = require('../config/webpack.devserver.config');

 const compiler = webpack(webpackConfig);

 const devServerOptions = Object.assign({}, webpackDevServerConfig, {
  stats: {
    colors: true
  }
 });
 const server = new webpackDevServer(compiler, devServerOptions);
 server.listen(port, host, (error, status) => {
   console.log('start server。。。')
  if (error) {
    process.exit(1)
  }
 });

