const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./base.config.js");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  ...baseConfig,
};
