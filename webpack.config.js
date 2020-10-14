const path = require('path');

module.exports = {
    name: 'gugudan',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: [ './client.jsx' ]
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [ '> 5% in KR', 'last 2 chrome versions'],
                        },
                        debug:true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },

    output: {
        path: path.join(__dirname),
        filename: 'app.js'
    }
}