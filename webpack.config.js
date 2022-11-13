module.exports = {
    devtool: 'source-map',
    cache: true,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'app.js'
    },
};
