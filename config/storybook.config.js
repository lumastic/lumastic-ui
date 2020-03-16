const rules = require("./webpack.rules");

module.export = {
  stories: ["../src/**/*.stories.[tj]s"],
  webpackFinal: config => ({ ...config, module: { ...config.module, rules } })
};
