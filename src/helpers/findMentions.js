/* eslint-disable no-unused-expressions */
const mentionCheck = valueItem => {
  const mentions = [];
  valueItem?.children?.forEach(child => {
    if (child?.name === "mention" && child?.state?.userProfile) {
      mentions.push({ id: child?.state?.userProfile?.id });
    } else if (child?.children) {
      mentions.push(...mentionCheck(child));
    }
  });
  return mentions;
};

/**
 * parses a press object array that is used as content to get the appropriate mentions
 * @param {[]} object array of press object
 */
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
