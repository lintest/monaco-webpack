const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.ts'
	},
	output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new CleanWebpackPlugin(),
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