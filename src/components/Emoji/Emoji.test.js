import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Emoji } from ".";

describe("Emoji tests", () => {
  test("Can mount", () => {
    render(<Emoji>Test</Emoji>);
    expect(screen.queryByTestId("emoji")).toBeTruthy();
  });
});
