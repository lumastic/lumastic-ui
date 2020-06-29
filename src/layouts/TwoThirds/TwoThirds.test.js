import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TwoThirds } from ".";

describe("TwoThirds tests", () => {
  test("Can mount", () => {
    render(<TwoThirds>Test</TwoThirds>);
    expect(screen.queryByTestId("twothirds")).toBeTruthy();
  });
});
