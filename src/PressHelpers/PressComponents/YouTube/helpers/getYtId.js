export const getYtId = url => {
  let ID;
  const match = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (match[2]) {
    [ID] = match[2].split(/[^0-9a-z_-]/i);
  } else {
    ID = match;
  }
  return ID;
};
