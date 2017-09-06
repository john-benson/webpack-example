const path = require('path');

const dir = path.dirname(__dirname);

module.exports = {
  src: path.join(dir, 'src'),
  build: path.join(dir, 'build'),
	node_modules: path.join(dir, 'node_modules')
};
