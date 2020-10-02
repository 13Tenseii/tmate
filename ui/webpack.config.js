const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.join(__dirname, "target/dist/static/js"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};