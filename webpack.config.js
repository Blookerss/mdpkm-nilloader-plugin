const webpack = require('webpack');  
const Manifest = require('./src/manifest.json');
const ZipPlugin = require('zip-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: '/src/main',
    target: ['web', 'es2020'],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/react']
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        // mdpkm does not yet support loading other files!
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new ZipPlugin({
            filename: `${Manifest.id}-${Manifest.version}`,
            extension: 'plugin'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/manifest.json' },
                { from: 'src/assets/img/icon.svg', to: 'icon.svg' }
            ],
        })
    ],
    experiments: {
        topLevelAwait: true
    }
};