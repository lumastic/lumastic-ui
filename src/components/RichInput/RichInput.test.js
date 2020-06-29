import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { RichInput } from ".";

describe("RichInput tests", () => {
  test("Can mount", () => {
    render(<RichInput>Test</RichInput>);
    expect(screen.queryByTestId("richinput")).toBeTruthy();
  });
});
