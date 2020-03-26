import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Tooltip } from ".";

describe("Tooltip tests", () => {
  test("Can mount", () => {
    render(<Tooltip>Test</Tooltip>);
    expect(screen.queryByTestId("tooltip")).toBeTruthy();
  });
});
