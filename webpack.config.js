const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
    home: path.resolve(__dirname, "./src/components/home.js"),
    album: path.resolve(__dirname, "./src/components/album.js"),
    user: path.resolve(__dirname, "./src/components/user.js"),
  },
  output: { path: path.resolve(__dirname, "build"), filename: ["name"].js },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "index.html",
      chunks: ["main", "home"],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/user.html"),
      filename: "user.html",
      chunks: ["main", "user"],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/album.html"),
      filename: "album.html",
      chunks: ["main", "album"],
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
  devServer: {
    port: 8080,
    // proxy: {
    //   "**/api/**": {
    //     target: "http://web/api/index.php",
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
