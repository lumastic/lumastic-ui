/* eslint-disable global-require */

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-initial")({
      reset: "inherited"
    })
  ]
};
