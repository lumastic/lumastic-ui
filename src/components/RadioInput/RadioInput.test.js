import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { RadioInput } from ".";

describe("RadioInput tests", () => {
  test("Can mount", () => {
    render(<RadioInput>Test</RadioInput>);
    expect(screen.queryByTestId("radioinput")).toBeTruthy();
  });
});
