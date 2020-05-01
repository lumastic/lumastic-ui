const path = require("path");
const { readdirSync } = require("fs");

const toImport = (source = path.resolve(__dirname)) => {
  const folders = [];
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      folders.push(`./${dirent.name}`);
      return null;
    });
  return folders;
};

// console.log(toImport());

toImport().forEach(folder => require(folder));
