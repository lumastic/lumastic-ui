const path = require("path");
const { readdirSync } = require("fs");

const createEntries = source => {
  const entries = {};
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      entries[`${dirent.name}/index`] = `${source}/${dirent.name}`;
      return null;
    });
  return entries;
};

const getEntries = () => {
  const components = path.resolve(__dirname, "src/components");
  const templates = path.resolve(__dirname, "src/templates");
  const layouts = path.resolve(__dirname, "src/layouts");
  return {
    ...createEntries(components),
    ...createEntries(templates),
    ...createEntries(layouts)
  };
};

module.exports = { getEntries };
