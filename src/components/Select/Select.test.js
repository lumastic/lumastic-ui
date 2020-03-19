import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Select } from ".";

describe("Select tests", () => {
  test("Can mount", () => {
    render(<Select>Test</Select>);
    expect(screen.queryByTestId("select")).toBeTruthy();
  });
});
