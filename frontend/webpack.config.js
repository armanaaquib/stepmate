const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "production",

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

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};
