const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      'app': './src/app.js'
  },
  output: {
      filename: '[name].[hash:5].js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.(png|jpg)$/,
            use: {
                loader: 'url-loader'
            }
        },
          {
              test: /\.(html)$/,
              use: [
                  {
                      loader: 'html-loader',
                      options: {
                          attrs: ['img:src', 'img:data-src'] // 通过img:XX指定图片类型
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // 如果不传，默认未index.html
        template: './src/index.html',
        // inject: false, // 控制是否将js/css 插入到html中
        minify: {
            // collapseWhitespace: true // 压缩空格
        }
        // chunks: [] // 如果不指定，默认会把entry中的文件都插入到html中
    })
  ]
}