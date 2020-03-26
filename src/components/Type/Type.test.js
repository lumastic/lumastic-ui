import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Type } from ".";

describe("Type tests", () => {
  test("Can mount", () => {
    render(<Type>Test</Type>);
    expect(screen.queryByTestId("type")).toBeTruthy();
  });
});
