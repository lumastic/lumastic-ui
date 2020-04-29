import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeBar } from ".";

describe("HomeBar tests", () => {
  test("Can mount", () => {
    render(<HomeBar>Test</HomeBar>);
    expect(screen.queryByTestId("homebar")).toBeTruthy();
  });
});
