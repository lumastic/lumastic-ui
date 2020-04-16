import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { EmojiSelector } from ".";

describe("EmojiSelector tests", () => {
  test("Can mount", () => {
    render(<EmojiSelector>Test</EmojiSelector>);
    expect(screen.queryByTestId("emojiselector")).toBeTruthy();
  });
});
