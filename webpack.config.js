const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js"],
    symlinks: false,
  },
  externals: [nodeExternals()],
};
