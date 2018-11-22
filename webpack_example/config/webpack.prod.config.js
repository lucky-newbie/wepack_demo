const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js'
  },
  devtool: 'false',
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
          MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin([
      'dist/*.*',
    ], {
      root: path.resolve(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}