const getTag = (props = {}) => {
  let tag = "p";
  Object.keys(props).forEach(prop => {
    if (props[prop]) {
      tag = prop;
    }
  });
  return tag;
};

export default getTag;
