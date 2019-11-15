
/**
 * 采用middleware方式启动webpack
 * 出现了csp content-security-Policy
 */
const app = require('express')();
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const complier = webpack(webpackConfig);

app.use(webpackDevMiddleWare(complier, {
  publicPath: webpackConfig.output.publicPath
}))

app.use((req, res, next) => {
  res.set({
    "X-Content-Security-Policy": "default-src *",
  });
  next();
})

app.listen(3000, () => {
  console.log('server is runing');
});