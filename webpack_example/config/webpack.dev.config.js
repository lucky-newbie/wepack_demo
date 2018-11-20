const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'index': './src/index.js'
  },
  // devServer:  { // webpack-devserver 配置
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   compress: true, // 进行Gzip压缩
  //   quiet: false,
  //   port: 3002,
  //   publicPath: '',
  //   hot: true,
  //   hotOnly: false // HMR时是否刷新浏览器，true：不刷新； false：刷新
  // },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:4].js',
    publicPath: '' // 也可指定cdn地址
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jxs']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: [path.resolve(__dirname, '../src')]
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          // {
          //   loader: 'post-'
          // },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
           'file-loader'
          ]
       }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

}