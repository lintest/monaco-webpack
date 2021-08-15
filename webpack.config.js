const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new CleanWebpackPlugin(),
    new MonacoWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'VAEditor',
      cache: false
    }),
  ],
  optimization: {
    minimize: false
  },
  devServer: {
    port: 4000,
    hot: true,
    open: true
  }
};