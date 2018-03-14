module.exports = {
    entry: {
        'app': './app.ts'
    },
    output: {
        filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    option: {
                        
                    }
                }
            }
        ]
    }
}