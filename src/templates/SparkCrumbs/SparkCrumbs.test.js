import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkCrumbs } from ".";

describe("SparkCrumbs tests", () => {
  test("Can mount", () => {
    render(<SparkCrumbs>Test</SparkCrumbs>);
    expect(screen.queryByTestId("sparkcrumbs")).toBeTruthy();
  });
});
