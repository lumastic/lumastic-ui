import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NewComment } from ".";

describe("NewComment tests", () => {
  test("Can mount", () => {
    render(<NewComment>Test</NewComment>);
    expect(screen.queryByTestId("newcomment")).toBeTruthy();
  });
});
