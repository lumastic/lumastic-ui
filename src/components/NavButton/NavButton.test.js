import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NavButton } from ".";

describe("NavButton tests", () => {
  test("Can mount", () => {
    render(<NavButton>Test</NavButton>);
    expect(screen.queryByTestId("navbutton")).toBeTruthy();
  });
});
