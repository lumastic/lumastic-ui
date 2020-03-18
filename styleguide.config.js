const path = require("path");
const fs = require("fs");

module.exports = {
  components: "src/components/**/*.js",
  ignore: [
    "src/components/**/index.js",
    "src/components/**/*.test.js",
    "src/components/**/examples/*"
  ],
  theme: {
    fontFamily: {
      base: "'Roboto', 'Arial', 'sans-serif'"
    }
  },
  updateExample: (props, exampleFilePath) => {
    const { settings, lang } = props;
    if (settings && settings.file && typeof settings.file === "string") {
      const filepath = path.resolve(
        path.dirname(exampleFilePath),
        settings.file
      );
      const { file, ...restSettings } = settings;
      return {
        content: fs.readFileSync(filepath, "utf8"),
        settings: { static: true, ...restSettings },
        lang
      };
    }
    return props;
  },
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, ".js");
    const dir = `lumastic-ui/${name}`;
    return `import ${name} from "${dir}";`;
  }
};
