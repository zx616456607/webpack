const webpackMerge = require('webpack-merge')
const base = require('./base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(base, {
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  }
})