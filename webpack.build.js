var path = require('path');
var config = require('./webpack.config.js');

config.entry = {
  'Jui':'./example/main.js',
}

config.output = {
		path:path.join(__dirname, './dist'),
        filename: '[name].js',
		publicPath: './dist/'
}

module.exports = config;