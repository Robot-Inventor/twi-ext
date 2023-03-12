module.exports = {
    mode: "production",
    devtool: false,
    entry: "./src/twi-ext.ts",
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
        filename: "twi-ext.js",
        clean: true
    },
    optimization: {
        usedExports: false
    }
};
