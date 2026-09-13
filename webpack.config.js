const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  devtool: "eval-source-map", 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./resume.pdf", to: "./resume.pdf" },
        { from: "./src/img/ico2.png", to: "./favicon.ico" }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"] 
  },
  devServer: {
    static: "./build",
    port: 3000,
    hot: true
  },
};
