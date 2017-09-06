'use strict';

const merge = require('webpack-merge');

module.exports = (conf) => {
	const env = conf.env;

	const common = require('./webpack-config/common')(conf);

	if(env === 'development' || !env) {
		return merge(require('./webpack-config/dev')(conf), common);
	}

	return merge(common, require('./webpack-config/build')(conf));
};
