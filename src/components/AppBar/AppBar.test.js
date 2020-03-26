import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AppBar } from ".";

describe("AppBar tests", () => {
  test("Can mount", () => {
    render(<AppBar>Test</AppBar>);
    expect(screen.queryByTestId("appbar")).toBeTruthy();
  });
});
