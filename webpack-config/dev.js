const webpackMerge = require('webpack-merge')
const base = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(base, {
  entry: process.cwd() + '/src/index.js',
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: process.cwd() + '/src/index.html',
      favicon: process.cwd() + '/src/index.html'
    })
  ]
})