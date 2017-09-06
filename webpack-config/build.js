'use strict';

const webpack = require('webpack');
const pkg = require('../package.json');
const path = require('path');
const PATHS = require('./paths');

const CleanPlugin = require('clean-webpack-plugin');

module.exports = (conf) => ({
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].[hash].js'
  },
	devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanPlugin([PATHS.build], {
      root: process.cwd() // because Windows
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
});
