module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },

  devtool: "source-map",

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
