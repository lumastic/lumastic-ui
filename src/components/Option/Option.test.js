import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Option } from ".";

describe("Option tests", () => {
  test("Can mount", () => {
    render(<Option>Test</Option>);
    expect(screen.queryByTestId("option")).toBeTruthy();
  });
});
