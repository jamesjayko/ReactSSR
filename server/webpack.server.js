const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
	// inform webpack that we are building a bundle for nodeJS, not for browser. default is browser.
	target: 'node',

	// tell webpack the root file of our server application.
	entry: './src/index.js',

	// tell webpack where to put the output file that is generated.
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	// makes the node_modules not be included on server side rendering if it's used on client side. (makes init startup bundle size smaller)
	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
