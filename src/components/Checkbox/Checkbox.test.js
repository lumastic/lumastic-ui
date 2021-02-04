import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from ".";

describe("Checkbox tests", () => {
  test("Can mount", () => {
    render(<Checkbox>Test</Checkbox>);
    expect(screen.queryByTestId("checkbox")).toBeTruthy();
  });
});
