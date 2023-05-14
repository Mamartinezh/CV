
const path = require('path')
const htmlWepbackPlugin = require('html-webpack-plugin')


const ruleForJS = {
	test: /\.js$/,
	loader: 'babel-loader',
	options: {
		presets: [
			[
				'@babel/preset-react',
				{runtime: 'automatic'}
			]
		]
	}
}

const ruleForCSS = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
}

const ruleForMedia = {
	test: /\.(png|svg|webp|jpe?g|pdf)$/,
	use: 'file-loader?name=./images/[name].[ext]'
}

const ruleForAudio = {
	test: /\.(mp3)$/,
	use: 'file-loader?name=./audio/[name].[ext]'
}

const rules = [ruleForJS, ruleForCSS, ruleForMedia, ruleForAudio]

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build')
	},
	module: {rules},
	plugins: [ new htmlWepbackPlugin({template: './src/index.html'}) ],
	devServer: {
		open: true,
		port: 3000,
		compress: true
	}
}