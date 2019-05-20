const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webappPath =  __dirname+  "/src/main/webapp/";

module.exports = {
    entry: webappPath+ "index.js",
    devtool: "eval-source-map",
    mode: "development",
    output: {
        path: path.resolve(__dirname,"./src/main/resources/static"),
        filename: "[name].bundle.js"

    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ {
                            loader: MiniCssExtractPlugin.loader
                        }
                        //,"style-loader" -> not working with miniextractcss loader
                        ,{
                            loader: "css-loader"
                        }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: webappPath + "index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}