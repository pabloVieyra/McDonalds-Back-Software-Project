const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
  },
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "./node_modules"),
    }),
    nodeExternals(),
  ],
};
