module.exports = {
    resolve: {
        extensions: [ "", ".js", ".jsx", ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    babelrc: true,
                    plugins: [
                        'transform-es2015-modules-commonjs',
                    ],
                },
            },
            // add more loaders here as needed.
        ],
    },
    devtool: "source-map",
}
