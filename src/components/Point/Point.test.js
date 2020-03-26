import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Point } from ".";

describe("Point tests", () => {
  test("Can mount", () => {
    render(<Point>Test</Point>);
    expect(screen.queryByTestId("point")).toBeTruthy();
  });
});
