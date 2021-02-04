import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("Logo tests", () => {
  test("Can mount", () => {
    render(<Logo>Test</Logo>);
    expect(screen.queryByTestId("logo")).toBeTruthy();
  });
});
