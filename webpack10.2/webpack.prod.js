
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'app': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ // 通过添加 modules：false
                                ['es2015', {
                                    "modules": false
                                }]
                            ],
                            plugins: ['syntax-dynamic-import']  
                        }
                    }
                
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        // minimize: true
        minimizer: [
            new UglifyWebpackPlugin({ // 压缩代码
                uglifyOptions: {
                    ecma: 6,
                    compress: false,
                    keep_classnames: true,
                    keep_fnames: true
                },
                cache: true,
                parallel: true
            })
        ],
        runtimeChunk: true, // 提取webpack运行代码，
        splitChunks: {
            name: true,
            minSize: 0,
            cacheGroups: { // 此处用来提起第三方依赖
                react: {
                    test: /react/,
                    chunks: 'initial'
                }
            }
        }
    }
}