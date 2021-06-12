const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
                { from: "./src/images", to: "images" },
                { from: "./src/fonts", to: "fonts" },
                // { from: "css", to: "css" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
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
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader?url=false']
            }
        ]
    },
    optimization: {
        minimizer: [
            //   `...`,
            new CssMinimizerPlugin({
            test: /\.css$/i,
            }),
        ],
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
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
