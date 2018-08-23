const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	// inform webpack that we are building a bundle for nodeJS, not for browser. default is browser.
	// target: 'node',

	// tell webpack the root file of our server application.
	entry: './src/client/client.js', // usually client/index.js

	// tell webpack where to put the output file that is generated.
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public') // this is public for the client
	}
};

module.exports = merge(baseConfig, config);
