var path = require("path");

var config = {
    devtool: "eval",
    entry: "./src/app.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src'),
                use: ['ts-loader']
            },
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'test'),
                use: ['ts-loader']
            }
        ]
    }
};

module.exports = config;