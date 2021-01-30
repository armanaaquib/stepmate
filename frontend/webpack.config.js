/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "production",

  devtool: "source-map",

  // entry files
  entry: "./src/index.tsx",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.[fullhash].js"
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ],

  devServer: {
    port: 3000
  }
};
