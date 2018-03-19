var path = require('path');

module.exports = {
    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/' // 通过publicPath改变应用资源相对路径
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // insertInto: '#app', // 插入到页面中id为app的dom
                            singleton: true,
                            transform: './css.transform.js' //css路径
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true, // 打开css-modules 
                            localIdentName: '[path].[name]._[local]--[hash:base64:5]'
                        }
                    }
                    /**
                     * 使用style-loader/url将css通过link标签引用
                    //  */
                    // {
                    //     loader: 'style-loader/url'
                    // },
                    // {
                    //     loader: 'file-loader'
                    // }
                    /**使用style-loader/useable， 来控制css是否使用 */
                    // {
                    //     loader: 'style-loader/useable'
                    // },
                    // {
                    //     loader: 'css-loader'
                    // }
                ]
            }
        ]
    }
}