import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressPost } from ".";

describe("ProgressPost tests", () => {
  test("Can mount", () => {
    render(<ProgressPost>Test</ProgressPost>);
    expect(screen.queryByTestId("progresspost")).toBeTruthy();
  });
});
