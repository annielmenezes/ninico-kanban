const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
  dist: path.resolve(__dirname, "dist"),
  src: path.resolve(__dirname, "src"),
  js: path.resolve(__dirname, "src/js")
};

module.exports = {
  entry: path.join(paths.js, "index.js"),
  output: {
    path: paths.dist,
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, "index.html")
    }),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: paths.src
  }
};
