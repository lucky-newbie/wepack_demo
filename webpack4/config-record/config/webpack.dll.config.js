const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-dom']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '[name]',

  },
  
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // 此处的name需要与libiray名称保持一致
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    }),
  ]
}