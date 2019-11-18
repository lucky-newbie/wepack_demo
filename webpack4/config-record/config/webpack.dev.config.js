
const webpack = require('webpack');
const path = require('path');

const devServer = require('./webpack.devserver.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean-webpack-plugin 版本更新
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const CopyWebpackPlugin = require('../plugins/copyright-webpack-plugin')


module.exports = {
  mode: 'development',
  /**
   * devtool 属性值：
   * none： 无sourcemap
   * eavl: 通过eval执行， 通过//# souceURL找到代码位置
   * sourcemap: 生成.map文件
   * cheap: 1.不包含列信息, 仅显示第几行;2.仅记录业务代码信息, 不包含第三方代码 
   * module: 包含第三方代码、loader的sourcemap
   * inline: 将.map文件以dataURl嵌入，不单独生存.map文件,放到bundle.js中
   */
  /*
    开发环境建议： cheap-module-eval-source-map
    生存环境：cheap-module-source-map
  */
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, '../'), // 默认当前路径,使用绝对路径
  // entry 接收参数类型， 字符串、对象、数组、函数, 如：： () => 字符串| 数组|对象
  entry: {
    'main': './src/index.js',
    'main2': './src/index2.js'
  },
  output: {
    filename: '[name]'.js,
    chunkFilename: '[name].chunk.js', // 
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  /* 额外配置resolve会影响webpack打包速度 */
  resolve: {
    // 指定别名
    alias: {
      'component': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx'],
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ], // 指定从哪里找文件
    // mainFiles: ['index'], // 指定每次查找首先查找文件名
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  devServer: devServer,
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            // placehoder
            name: '[name].[hash:4].[ext]',
            // 指定文件输出位置
            outputPath: 'images/',
            /* 大小小于2048,即2kb时，将图片转化为base64放到js中，大于等于的话按照file-loader效果 */
            limit: 2048
          }
        }
      },
      {test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader'
          // },
          {
            /* 将所有css提取到了一个文件中 */
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          {
            // 如果未进行css提取，则会将css打包到js中，通过eval执行no
            loader: 'css-loader',
            options: {
              /**
               * importLoaders作用：
               * 在scss文件（less文件）中，使用了import语句，指定importLoaders:2, 即依次import也会执行css-loader
               */
              importLoaders: 2,
              modules: true, // 开启css module

            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          
        ]
      },

      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            // 如果未进行css提取，则会将css打包到js中，通过eval执行no
            loader: 'css-loader',
            options: {
              /**
               * importLoaders作用：
               * 在scss文件（less文件）中，使用了import语句，指定importLoaders:2, 即依次import也会执行css-loader
               */
              importLoaders: 2,
              modules: true, // 开启css module

            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            /*
              babel-loader 处理js文件时，仅仅是webpack与babel进行通信的桥梁， 不会把ES6的语法翻译成ES5
            */
            loader: 'babel-loader',
            options: {
              plugins: ["@babel/plugin-syntax-dynamic-import"],
              /* 
                打包组件库时使用如下的
                transform-runtime,不会污染全局变量
              */
              // "plugins": [
              //   ["@babel/plugin-transform-runtime", {
              //     "corejs": 2,
              //     "helpers": true,
              //     "regenerator": true,
              //     "useESModules": false
              //   }]
              // ],
              /* 应用代码时使用以下配置 */
              presets: [
                /* 仅仅把一部分ES6语法转化成ES5 */
                ['@babel/preset-env', {
                  /* 当浏览器大于65时，则不进行语法转化 */
                  targets : {
                    chrome: '65'
                  },
                  'useBuiltIns': 'usage' /*  仅引入业务代码中用到的ES6方法的实现, 则代码中不需要使用@babel-polyfill  */
                }],
                '@babel/preset-react'
              ]
            }
          },
          // { /* 会影响打包速度， 正常会通过git hook进行配置eslint */
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true,
          //     cache: true
          //   }
          // }
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    //如果不加配置， 则会默认生存一个dist/index.html, 并且将bundle.js注入到html中
    new HtmlWebpackPlugin({
      title: '未起作用？',
      template: './src/index.html', // 相对或绝对路径
      filename: 'index.html', // 此处修改为其他名字时， webpack-dev-server似乎需要其他配置，指定入口文件
      // 配置meta标签
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#4285f4'
      }
    }),
    new webpack.HotModuleReplacementPlugin(), //  配合devserver中的hot， 实现hmr
    new OptimizeCSSAssetsPlugin(),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
    }),
    new CopyWebpackPlugin({
      name: 'hello'
    }),
  ],
  optimization: {
    // usedExports:  true,
    splitChunks: {
      /** 
       * chunks可接受字符串，也可接受函数
       * all: 同步代码喝异步代码进行分割
       * async: 对移步代码进行分割
       * initial
       *  */
      chunks: 'all', // 指定对哪种代码进行分割
      minSize: 30000, // 引入的库或者插件，大于30000字节（大约30kb）才会进行代码分割
      maxSize: 0, // 当拆分出代码之后， 如果大于了maxSize的值，会尝试进行二次拆分，如果能拆分会进行二次拆分，用的少
      minChunks: 1, // 当多少个模块被使用了多少次后进行代码拆分
      maxAsyncRequests: 5, // 同时最多加载的代码块,当超过设定的值，则不会对超过的部分进行分割
      maxInitialRequests: 3, // 入口文件加载时，如果进行代码分割，最多可分割三个，超过部分就不分割了
      automaticNameDelimiter: '~', // 组和文件名连接时的链接符
      automaticNameMaxLength: 30,
      name: true,
      // chunks:all, 并符合以上的条件时，会通过cacheGroups进行判断，是否进行代码分割
      cacheGroups: {
        // 会判断是否对node_modules中代码进行分割
        vendors: {
          // 判断是否是node_modules路径中引入的， 如果是则单独提取成一个文件
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 通过该值判断代码应该拆分到哪个文件中，-10 > -20, 所以会打到vendor,js中，而不是common.js
          filename: '[name]-vendors.js' // 
        },
        // 不满足条件的会走到default分支
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // 会将拆分的代码中进行判断，是否存在已打包过的代码，如果有在打包的时候直接复用之前的代码
          filename: 'common.js'
        }
      }
    }
  }
  
}