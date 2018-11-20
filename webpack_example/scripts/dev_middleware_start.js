/**
 * webpack-dev-middleware方式启动开发环境， 此方式较webpack-dev-server更容易扩展
 */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');

const webpackConfig = require('../config/webpack.dev.config');
const webpackDevServerConfig = require('../config/webpack.devServer.config');

const compiler = webpack(webpackConfig);

const app = express(); // 创建express实例

app.use(webpackDevMiddleware(compiler, webpackDevServerConfig));

app.listen(3001, function () {
  console.log('Example app listening on port 3000!\n');
});
