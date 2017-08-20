var path = require("path");
var ExtractTextPlugin =  require('extract-text-webpack-plugin');
var webpack = require('webpack');

var config = {
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/mock/tasksMock.ts',
        './src/Index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src'),
                use: ['ts-loader']
            },
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'test'),
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;