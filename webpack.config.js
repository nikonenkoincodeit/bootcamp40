const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    timer: path.resolve(__dirname, "./src/js/timer.js"),
    users: path.resolve(__dirname, "./src/js/users.js"),
    comments: path.resolve(__dirname, "./src/js/comments.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/users.html"),
      filename: "users.html",
      chunks: ["users"],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/timer.html"),
      filename: "timer.html",
      chunks: ["timer"],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/comments.html"),
      filename: "comments.html",
      chunks: ["comments"],
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
