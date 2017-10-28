//open Terminal then cd 9-modules\webpack-modules-bundler
//Then run webpack on the command-line to create bundle.js
//Install npm i -D uglifyjs-webpack-plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}