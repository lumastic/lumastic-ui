import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TopBar } from ".";

describe("TopBar tests", () => {
  test("Can mount", () => {
    render(<TopBar>Test</TopBar>);
    expect(screen.queryByTestId("topbar")).toBeTruthy();
  });
});
