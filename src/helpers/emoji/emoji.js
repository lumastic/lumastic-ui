import { fetchFromCDN } from "emojibase";
import groups from "./data/groups.json";

const VERSION = "5.0.1";

const getEmojisByGroup = () =>
  fetchFromCDN("en/compact.json", VERSION, { local: true })
    .then(compact => {
      const groupedEmoji = {
        "smileys-emotion": [],
        "people-body": [],
        component: [],
        "animals-nature": [],
        "food-drink": [],
        "travel-places": [],
        activities: [],
        objects: [],
        symbols: [],
        flags: []
      };
      compact.forEach(emoji => {
        groupedEmoji[groups.groups[emoji.group]].push(emoji);
      });
      return groupedEmoji;
    })
    .catch(e => console.log(e));

const getEmoji = shortcode =>
  fetchFromCDN("en/compact.json", VERSION, { local: true })
    .then(compact => {
      const emojo = compact.find(emoji => {
        let shortMatch = false;
        emoji.shortcodes.forEach(code => {
          if (shortcode === code) shortMatch = true;
        });
        return shortMatch;
      });
      return emojo;
    })
    .catch(e => console.log(e));

const searchEmoji = searchString =>
  fetchFromCDN("en/compact.json", VERSION, { local: true })
    .then(compact => {
      if (!searchString || searchString === "") {
        return compact;
      }
      return compact.filter(emoji => {
        if (emoji.annotation.includes(searchString)) return true;
        let inMeta = false;
        emoji.tags.forEach(tag => {
          if (tag.includes(searchString)) {
            inMeta = true;
          }
        });
        emoji.shortcodes.forEach(shortcode => {
          if (shortcode.includes(searchString)) {
            inMeta = true;
          }
        });
        return inMeta;
      });
    })
    .catch(e => console.log(e));

export { getEmojisByGroup, searchEmoji, getEmoji };
