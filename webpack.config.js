const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: './webpack-stats.json'
    }),
    new MiniCssExtractPlugin({
      filename: './bundle.css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'vue-style-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  }
}
