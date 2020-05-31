const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/main.js', ],
    plugins: [
        new webpack.DefinePlugin({
            "BACKEND_URL": process.env.BACKEND_URL,
        }),
        new ExtractTextPlugin('tailwind.css'),
        new HtmlWebpackPlugin({
            title: 'Lovaiible',
            template: './public/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(ts|vue)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[path][name].[ext]',
                    }
                }
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
