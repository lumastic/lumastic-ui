import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from ".";

describe("Badge tests", () => {
  test("Can mount", () => {
    render(<Badge>Test</Badge>);
    expect(screen.queryByTestId("badge")).toBeTruthy();
  });
});
