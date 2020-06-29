import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PressInput } from ".";

describe("PressInput tests", () => {
  test("Can mount", () => {
    render(<PressInput>Test</PressInput>);
    expect(screen.queryByTestId("pressinput")).toBeTruthy();
  });
});
