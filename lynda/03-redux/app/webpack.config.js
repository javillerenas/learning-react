var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true /** hot realoading + console messages */,
    contentBase:
      "./dist" /** where to serve content from - index.html by default */,
    port: 3000
  },
  module: {
    rules: [
      /** used to TRANSPILE modules  */
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: ["json-loader"]
      }
    ]
  }
};
