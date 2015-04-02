module.exports = {
  entry: __dirname + "/dynamic/index.js",

  output: {
    path: __dirname,
    filename: "app.js"
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ["babel"]}
    ]
  }
}
