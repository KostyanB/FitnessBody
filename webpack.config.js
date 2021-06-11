const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'./build'),
        clean: true, // очистка бандлов
		environment: {
			arrowFunction: false, // откл => old browser
		}
    },
    mode,
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: 'index.html',
			template: './src/index.html',
			minify: {
				collapseWhitespace: !isDev,
			}
		}),
        new HTMLWebpackPlugin({
            filename: 'mozaika.html',
			template: './src/mozaika.html',
			minify: {
				collapseWhitespace: !isDev,
			}
		}),
        new HTMLWebpackPlugin({
            filename: 'schelkovo.html',
			template:'./src/schelkovo.html',
			minify: {
				collapseWhitespace: !isDev,
			}
		}),
        new CopyPlugin({
			patterns: [
                { from: "images", to: "images" },
                { from: "fonts", to: "fonts" },
                { from: "css", to: "css" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
		//contentBase: './build',
		open: true,
		port: 3000,
		hot: true,
		compress: true,
		overlay: true,
		writeToDisk: true,
		historyApiFallback: true,
		//stats: 'errors-only',
	},
	devtool: isDev && 'source-map', // показывает в консоли стили в исходниках в serv
};