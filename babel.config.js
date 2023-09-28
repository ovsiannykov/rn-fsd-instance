module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					tests: ['./tests/'],
					'@app': './src/app',
					'@shared': './src/shared',
					'@screens': './src/screens',
					'@navigation': './src/navigation',
					'@widgets': './src/widgets',
					'@entities': './src/entities',
					'@features': './src/features',
				},
			},
		],
	],
}
