module.exports = {
	entry: './src/index.js',
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js'],
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'index.js',
	},
}
