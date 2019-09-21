const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

module.exports = {
    mode: "development",
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "../public"),
        filename: "[name].bundle.js",
        chunkFilename: '[name].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                //check url-loader github, limit file size to 10000 bytes and define mimetype
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new AsyncChunkNames()
    ],
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                default:false,
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }
}