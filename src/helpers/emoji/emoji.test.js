import { fetchFromCDN } from "emojibase";
import { getEmojisByGroup, searchEmoji } from ".";
import compact from "./data/compact.json";
import data from "./data/data.json";

jest.mock("emojibase");

const mockFetchFromCDN = query => {
  switch (query) {
    case "en/compact.json":
      return Promise.resolve(compact);
    default:
      return Promise.resolve(data);
  }
};

fetchFromCDN.mockImplementation(mockFetchFromCDN);

describe("Getter Tests", () => {
  test("Get emojis by group", () => {
    getEmojisByGroup().then(resp => expect(resp).toBeTruthy());
  });
});

describe("Search emoji", () => {
  test("Empty search returns all emojis", () => {
    searchEmoji().then(resp => expect(resp).toStrictEqual(compact));
  });
  test("Seach smileys", () => {
    searchEmoji("smile").then(resp => {
      console.log(resp);
      expect(resp).toBeTruthy();
    });
  });
});
