const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "index.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/user.html"),
      filename: "user.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/album.html"),
      filename: "album.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
