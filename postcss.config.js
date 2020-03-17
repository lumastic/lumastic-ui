/* eslint-disable global-require */

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-autoreset")({
      reset: {
        fontFamily: "Roboto, Arial, sans-serif "
      }
    }),
    require("postcss-initial")({
      reset: "inherited"
    })
  ]
};
