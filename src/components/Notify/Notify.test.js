import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Notify } from ".";

describe("Notify tests", () => {
  test("Can mount", () => {
    render(<Notify>Test</Notify>);
    expect(screen.queryByTestId("notify")).toBeTruthy();
  });
});
