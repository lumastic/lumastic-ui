import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import { fetchFromCDN } from "emojibase";
import React from "react";
import { EmojiSelector } from ".";
import compact from "../../helpers/emoji/data/compact.json";
import data from "../../helpers/emoji/data/data.json";

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

describe("EmojiSelector tests", () => {
  test("Can mount", async () => {
    render(<EmojiSelector />);
    expect(true).toBeTruthy();
    // Waiit for promise to resolve to mock fetching emojis after initial render
    await act(() => mockFetchFromCDN());
  });
});
