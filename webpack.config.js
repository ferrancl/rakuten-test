const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    open: true,
    host: "localhost.rakuten.tv",
  },
};
