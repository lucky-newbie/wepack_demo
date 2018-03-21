var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');
var PurifyCSS = require('purifycss-webpack');
var globAll = require('glob-all');

module.exports = {
    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/', // 通过publicPath改变应用资源相对路径
        chunkFilename: '[name].js' // 动态打包文件名字
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        // options: {
                        //     // insertInto: '#app', // 插入到页面中id为app的dom
                        //     singleton: true,
                        //     transform: './css.transform.js' //css路径
                        // }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // minimize: true,
                                modules: true, // 打开css-modules 
                                localIdentName: '[path].[name]._[local]--[hash:base64:5]' // 指定css别名
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss', //表明下面插件是给postcss使用
                                plugins: [
                                    require('autoprefixer')(),
                                    require('postcss-cssnext')()
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            plugins: ['lodash']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css', // 提取文件名
            allChunks: false // 默认为false, 只提取初始化css
                            // 当为true时，会将所有的css提取出来
                            // 在src/app.js中异步加载一个css
        }),
        // css tree shaking 插件, 需放到extract-text-webpack-plugin后
        new PurifyCSS({
            paths: globAll.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),
        // js tree shaking 插件
        new Webpack.optimize.UglifyJsPlugin(),

        

    ]
}