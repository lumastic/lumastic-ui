import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label tests", () => {
  test("Can mount", () => {
    render(<Label>Test</Label>);
    expect(screen.queryByTestId("label")).toBeTruthy();
  });
});
