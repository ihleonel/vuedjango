const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    }),
    new VueLoaderPlugin()
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
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
}
