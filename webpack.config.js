/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require("path");

module.exports = (env = "dev") => require(`./webpack.${env}.js`);
