const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    cache: true,
    plugins: [new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'app.js'
    },
};
