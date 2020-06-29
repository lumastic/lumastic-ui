import { stringToPressValue } from "pressdk";

export const parseContent = content => {
  let obj = [];
  //   console.log(content);
  try {
    obj = JSON.parse(content);
    // console.log(obj);
  } catch (e) {
    obj = stringToPressValue(content);
  }
  //   console.log(obj);
  return obj;
};
