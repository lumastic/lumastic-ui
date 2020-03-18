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
      base: "'brandon-grotesque', 'sans-serif'"
    },
    color: {
      link: "white",
      linkHover: "#c5e7ff",
      sidebarBackground: "#249cf4"
    }
  },
  title: "Lumastic UI",
  styles: {
    Code: {
      code: {
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "0.25em 0.4em 0.15em",
        borderRadius: "4px",
        fontSize: "0.9em"
      }
    },
    Logo: {
      logo: {
        color: "white"
      }
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
