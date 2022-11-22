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
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(pcss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              config: "./postcss.config.js",
            },
          },
        }
      ],
    }]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    extensions: ['.ts', '.js',],
  },
  output: {
    filename: 'app.js'
  },
};
