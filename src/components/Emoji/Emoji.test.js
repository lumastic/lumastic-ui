import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Emoji } from ".";

describe("Emoji tests", () => {
  test("Can mount", () => {
    render(
      <Emoji
        emoji={{
          annotation: "grinning face",
          unicode: "😀",
          emoticon: ":D"
        }}
      />
    );
    expect(screen.queryByTestId("emoji")).toBeTruthy();
  });
});
