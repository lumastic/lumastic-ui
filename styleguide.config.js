const path = require("path");
const fs = require("fs");
const webpack = require("./webpack.dev.js");

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/helpers/styleguide/Wrapper")
  },
  webpackConfig: webpack,
  sections: [
    {
      name: "Components",
      components: "src/components/*/*.js"
    },
    {
      name: "Templates",
      components: "src/templates/*/*.js"
    },
    {
      name: "Views",
      components: "src/views/*/*.js"
    },
    {
      name: "Layouts",
      components: "src/layouts/*/*.js"
    },
    {
      name: "Forms",
      components: "src/forms/*/*.js"
    }
  ],
  ignore: ["src/*/**/index.js", "src/*/**/*.test.js", "src/*/**/examples/*"],
  theme: {
    fontFamily: {
      base: "'Roboto', 'sans-serif'"
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
    },
    Pre: {
      pre: {
        fontSize: "0.7rem"
      }
    },
    Playground: {
      preview: {
        backgroundColor: "#f4f4f4"
      }
    }
  },
  // updateExample: (props, exampleFilePath) => {
  //   const { settings, lang } = props;
  //   if (settings && settings.file && typeof settings.file === "string") {
  //     const filepath = path.resolve(
  //       path.dirname(exampleFilePath),
  //       settings.file
  //     );
  //     const { file, ...restSettings } = settings;
  //     return {
  //       content: fs.readFileSync(filepath, "utf8"),
  //       settings: { static: true, ...restSettings },
  //       lang
  //     };
  //   }
  //   return props;
  // },
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, ".js");
    const dir = `lumastic-ui`;
    return `import { ${name} } from "${dir}";`;
  }
};
