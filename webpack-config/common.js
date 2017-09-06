'use strict';

const PATHS = require('./paths');
const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');

module.exports = (conf) => {

	const APP_CONFIG = {
		RELEASE: new Date().getTime(),
		VERSION: pkg.version
	};

	return {
		entry: [ PATHS.src ],
		module: {
			rules: [
	      {
	        test: /\.js?$/,
	        use: 'eslint-loader',
	        include: [ PATHS.src ],
					enforce: 'pre'
	      },
				{
					test: /.js?$/,
					include: [ PATHS.src ],
					use: 'babel-loader'
				},
				{
					test: /\.json$/,
					use: 'json-loader'
				}
			]
		},
		resolve: {
			modules: [ PATHS.src, PATHS.node_modules ]
		},
		externals: {
			'APP_CONFIG': JSON.stringify(APP_CONFIG)
		},
		plugins: [
			new webpack.NamedModulesPlugin()
		]
	}
}
