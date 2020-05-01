const path = require("path");
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
              // insert: function insertAtTop(element) {
              //   const head = document.querySelector("head");
              //   // eslint-disable-next-line no-underscore-dangle
              //   const lastInsertedElement =
              //     window._lastElementInsertedByStyleLoader;

              //   if (!lastInsertedElement) {
              //     head.insertBefore(element, head.firstChild);
              //   } else if (lastInsertedElement) {
              //     head.insertBefore(element, lastInsertedElement);
              //   } else {
              //     head.appendChild(element);
              //   }

              //   // eslint-disable-next-line no-underscore-dangle
              //   window._lastElementInsertedByStyleLoader = element;
              // }
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]"
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
