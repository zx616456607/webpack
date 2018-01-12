module.exports = {
  entry: process.cwd() + '/src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: process.cwd() + '/src/index.html',
      favicon: process.cwd() + '/src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          hash: 'sha512',
          publicPath: '/',
          name: 'assets/images/[hash].[ext]'
          
        }
      }
    ]
  }
}