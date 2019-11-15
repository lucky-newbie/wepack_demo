const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyLibrary',
    libraryTarget: 'umd' 
  },
  externals: {
    'lodash': {
      root: '_',
      commonJS: 'lodash'
    }
  }
}