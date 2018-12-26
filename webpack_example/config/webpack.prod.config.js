const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob'); // 多个路径使用glob-all

const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js',
    'another': './src/another.js',
    'another2': './src/another2.js',
    'min': './src/min.js'
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
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:4]',
            }
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
  optimization: {
    splitChunks: {
      // chunks (chunk) {
      //   // 出去chunk名称为test
      //   return chunk.name !== 'test';
      // }
      automaticNameDelimiter: '-', // 将使用块的起源和名称生成名称(例如，vendor-入口1.js-入口2.js)
      chunks: 'all',
      minSize: 1000,
      maxInitialRequests: 5,
      maxInitialRequests: 3,

    }
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
    // 需要在miniCssExtractPlugin下方使用
    new PurifyCSS({
      paths: glob.sync(
        // 绝对路径，如：src/index.js， 示例如下
        path.resolve(__dirname, "../src/*.js")
      ),
      // 此处白名单可过滤css modules中localIdentName包含purify的类名，
      // 如果不加，则css modules中样式都被tree shaking
      // 增加此处， css tree shaking的时候会过滤css module名字总包含purify的样式，不tree shaking
      purifyOptions: {
        whitelist: ['*purify*'] 
      }
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}