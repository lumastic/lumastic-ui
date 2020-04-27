import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkForm } from ".";

describe("SparkForm tests", () => {
  test("Can mount", () => {
    render(<SparkForm>Test</SparkForm>);
    expect(screen.queryByTestId("sparkform")).toBeTruthy();
  });
});
