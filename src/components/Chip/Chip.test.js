import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Chip } from ".";

describe("Chip tests", () => {
  test("Can mount", () => {
    render(<Chip>Test</Chip>);
    expect(screen.queryByTestId("chip")).toBeTruthy();
  });
});
