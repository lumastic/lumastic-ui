const path = require("path");

const getEntries = () => ({ "lib/Button/index": "./src/components/Button" });

const entries = getEntries();

module.exports = {
  mode: "development",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  module: {
    rules: [
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
    ]
  }
};
