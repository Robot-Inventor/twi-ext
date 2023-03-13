module.exports = {
    mode: "production",
    devtool: false,
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "index.js",
        clean: true,
        library: "twi-ext",
        libraryTarget: "umd"
    }
};
