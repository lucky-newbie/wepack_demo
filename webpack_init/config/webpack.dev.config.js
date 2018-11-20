const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'umd/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'test',
    libraryTarget: 'umd',
    auxiliaryComment: { // 当与library、libraryTarget一起使用时，为各种输出写入注释
      amd: 'test amd',
      commonjs: "test commonjs"
    }
  },

  resolve: {
    modules: ["node_modules", "src"],
    alias: {

    },
    extensions: ['.js', 'jsx']
  },
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM",
  // },
  externals: [
    {
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      }
    },
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      'prop-types': {
        root: "PropTypes",
        commonjs2: "prop-types",
        commonjs: "prop-types",
        amd: "prop-types"
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                "useBuiltIns": "entry"
              }
            ],
            // "react-app"
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.(css|scss)$/,

      }
    ]
  },
  optimization: {
    splitChunks: {

    }
  },
  plugins: [
    new CleanWebpackPlugin([
      '../dist/umd'
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
  ]
}