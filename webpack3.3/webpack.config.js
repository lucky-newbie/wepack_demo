module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: 'babel-loader', // 可以为对象，也可以为字符串
                use: {
                    loader: 'babel-loader',
                    // 如果没有babelrc文件，则在这里进行配置babel，如果有babelrc文件，则将配置移动到babelrc中
                    // options: {
                    //     // presets 指定语法规范
                    //     // presets: ['@babel/preset-env']
                    //     //其中presets可以带有参数： targets ，从而指定打包的环境
                    //     // browserslist配置说明 https://www.npmjs.com/package/browserslist
                    //     presets: [
                    //         ['@babel/preset-env', {
                    //             targets: {
                    //                 // 指定当前浏览器前1%， 最新前两版本
                    //                 browserslist: ['>1%', 'last 2 versions']
                    //                 // 指定浏览器版本
                    //                 // chrome: '52'
                    //             }
                    //         }]
                    //     ]
                    // }
                },
                exclude: '/node-modules/',
                // babel-presets 是对一些规范的总结，
                // 如： es2015/ es2016/es2017/env/babel-preset-react
            }
        ]
    }
}