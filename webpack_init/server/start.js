/**
 * 通过webpack-dev-middleware 中间价方式启动
 */

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express')
const webpackConfig = require('../config/webpack.dev.config');

const compiler = webpack(webpackConfig);
const app = new express();

app.use(middleware(compiler, {

}))

app.listen(3000, () => {
  console.log('server start...')
})

