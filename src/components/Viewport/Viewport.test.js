import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Viewport } from ".";

describe("Viewport tests", () => {
  test("Can mount", () => {
    render(<Viewport>Test</Viewport>);
    expect(screen.queryByTestId("viewport")).toBeTruthy();
  });
});
