'use strict';

const path = require('path');
const root = path.join(__dirname, '..');
const { merge } = require('webpack-merge');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = (env) => {
    let config = {
        entry: {
            main: path.join(root, 'src', 'app')
        },

        output: {
            filename: 'bundle.js',
            path: path.join(root, 'dist')
        },

        module: {
            rules: [
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /node_modules/,
                    loader: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }
            ]
        },

        plugins: []
    };

    var configMode = null;
    if(env && env.production) {
        config = merge(config, prodConfig)
        configMode = 'prod';
    } else {
        config = merge(config, devConfig)
        configMode = 'dev';
    }

    console.log(`Build mode: \x1b[33m${configMode}\x1b[0m`);



    return config;
};
