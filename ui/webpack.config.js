const path = require("path");

module.exports = {
    entry: "./src/js/index.tsx",
    output: {
        path: path.join(__dirname, "target/dist/static/js"),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};