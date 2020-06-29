import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Reaction } from ".";

describe("Reaction tests", () => {
  test("Can mount", () => {
    render(<Reaction>Test</Reaction>);
    expect(screen.queryByTestId("reaction")).toBeTruthy();
  });
});
