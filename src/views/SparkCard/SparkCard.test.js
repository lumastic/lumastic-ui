import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkCard } from ".";

describe("SparkCard tests", () => {
  test("Can mount", () => {
    render(<SparkCard>Test</SparkCard>);
    expect(screen.queryByTestId("sparkcard")).toBeTruthy();
  });
});
