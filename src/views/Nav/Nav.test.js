import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Nav } from ".";

describe("Nav tests", () => {
  test("Can mount", () => {
    render(<Nav>Test</Nav>);
    expect(screen.queryByTestId("nav")).toBeTruthy();
  });
});
