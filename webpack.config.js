const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getEntries } = require("./getEntries");

const entries = getEntries();

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-router-dom": "react-router-dom"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "styleTag"
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]"
              }
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
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
