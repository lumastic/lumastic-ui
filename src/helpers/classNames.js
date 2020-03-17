const classNames = (...classes) => {
  const classnames = [];
  classes.forEach(e => {
    if (!e) return;
    const type = typeof e;
    switch (type) {
      case "object":
        if (e[Object.keys(e)[0]]) classnames.push(Object.keys(e)[0]);
        break;
      default:
        classnames.push(e);
        break;
    }
  });
  return classnames.join(" ");
};

export default classNames;
