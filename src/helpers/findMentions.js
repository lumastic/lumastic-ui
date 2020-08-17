/* eslint-disable no-unused-expressions */
const mentionCheck = valueItem => {
  const mentions = [];
  valueItem?.children?.forEach(child => {
    if (child?.name === "mention") {
      mentions.push({ id: child?.state?.userProfile?.id });
    } else if (child?.children) {
      mentions.push(...mentionCheck(child));
    }
  });
  return mentions;
};

export const findMentions = (object = []) => {
  const mentionIds = [];
  object.forEach(component => {
    if (component?.name === "type") {
      component?.value?.forEach(valueItem => {
        mentionIds.push(...mentionCheck(valueItem));
      });
    }
  });
  return mentionIds;
};
