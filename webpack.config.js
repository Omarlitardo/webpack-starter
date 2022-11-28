const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');




module.exports = {

    mode: 'development',

    output: {
        clean: true,
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader'],

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {
    },
    

    plugins: [
        new HtmlWebpack( {
          title: 'Mi Webpack App',
          template: './src/index.html'
        }),

        new MiniCssExtract({
          filename: '[name].css',
          ignoreOrder: false
        }),

        new CopyPlugin ({
            patterns:[
                { from: 'src/assets/', to: "assets/" }
            ]
        })
        
    ],
}

