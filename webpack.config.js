const config = {
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    "target": "node",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};

module.exports = config;