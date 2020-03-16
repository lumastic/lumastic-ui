const path = require("path");

module.export = [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, "src"),
    exclude: /(node_modules|bower_components|build)/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[local]"
          }
        }
      },
      {
        loader: "postcss-loader"
      }
    ]
  },
  {
    test: /\.svg$/,
    loader: "svg-sprite-loader"
  }
];
