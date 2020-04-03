import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Comments } from ".";

describe("Comments tests", () => {
  test("Can mount", () => {
    render(<Comments>Test</Comments>);
    expect(screen.queryByTestId("comments")).toBeTruthy();
  });
});
