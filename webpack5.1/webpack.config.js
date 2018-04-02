
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');
var PurifyCSS = require('purifycss-webpack');

// 清除webpack打包路径下的文件
var CleanWebpeckPlugin = require('clean-webpack-plugin');

var globAll = require('glob-all');
var path = require('path');

module.exports = {
    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', // 通过publicPath改变应用资源相对路径
        chunkFilename: '[name].js' // 动态打包文件名字
    },
    // 添加webpack dev server
    devServer: {

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
                                importLoaders: 1
                            //     // minimize: true,
                                // modules: true, // 打开css-modules  
                            //     localIdentName: '[path].[name]._[local]--[hash:base64:5]' // 指定css别名
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss', //表明下面插件是给postcss使用
                                plugins: [
                                    
                                    require('postcss-sprites')({
                                        spritePath: 'dist/assets/imgs/sprites', // 指定雪碧图生产位置
                                        // retina: true //表明为高清图片，图片命名需未XX@2x.ext，如：1@2x.png
                                    }),
                                    // require('autoprefixer')(),
                                    require('postcss-cssnext')(),
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
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     // options: {
                    //     //     // publicPath: '',
                    //     //     // outputPath: 'dist/',
                    //     //     useRelativePath: true
                    //     // }
                    // }
                    // 图片转base64
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-min.[ext]',
                            limit: 1000,
                            // publicPath: '',
                            // outputPath: '../',
                            // useRelativePath: true
                        }
                    },
                    {
                        loader: 'img-loader', // 图片压缩
                        options: {
                            pngquant: {
                                quality: 30
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            limit: 1000,
                            // outputPath: '/',
                            useRelativePath: true
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
        // new PurifyCSS({
        //     paths: globAll.sync([
        //         path.join(__dirname, './*.html'),
        //         path.join(__dirname, './src/*.js')
        //     ])
        // }),
        // js tree shaking 插件
        new Webpack.optimize.UglifyJsPlugin(),
        new CleanWebpeckPlugin(['dist']), // 传数组，指定删除的文件
        

    ]
}