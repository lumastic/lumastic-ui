import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkNavBar } from ".";

describe("SparkNavBar tests", () => {
  test("Can mount", () => {
    render(<SparkNavBar>Test</SparkNavBar>);
    expect(screen.queryByTestId("sparknavbar")).toBeTruthy();
  });
});
