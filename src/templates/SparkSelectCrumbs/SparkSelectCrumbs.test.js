import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkSelectCrumbs } from ".";

describe("SparkSelectCrumbs tests", () => {
  test("Can mount", () => {
    render(<SparkSelectCrumbs>Test</SparkSelectCrumbs>);
    expect(screen.queryByTestId("sparkselectcrumbs")).toBeTruthy();
  });
});
