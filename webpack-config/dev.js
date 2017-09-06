'use strict';

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (conf) => ({
	performance: {
		hints: false
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: 'node_modules/html-webpack-template/index.ejs',
			inject: false,
			env: process.env,
			title: 'Webpack Complete Example',
			baseHref: '/',
			appMountId: 'app',
			favicon: './favicon.ico'
		})
	],
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		https: true,
		hot: true,
    inline: true,
		stats: {
			colors: true,
			chunks: false,
			children: false
		}
	}
})
