import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkSelect } from ".";

describe("SparkSelect tests", () => {
  test("Can mount", () => {
    render(<SparkSelect>Test</SparkSelect>);
    expect(screen.queryByTestId("sparkselect")).toBeTruthy();
  });
});
