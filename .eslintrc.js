module.exports = {
	env: {
		node: true,
		es6: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
	},
	plugins: ['react', 'babel'],
	rules: {
		'import/no-named-as-default': 'off',
		'capitalized-comments': 'off',
	},
}
