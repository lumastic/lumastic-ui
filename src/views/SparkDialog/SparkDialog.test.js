import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkDialog } from ".";

describe("SparkDialog tests", () => {
  test("Can mount", () => {
    render(<SparkDialog>Test</SparkDialog>);
    expect(screen.queryByTestId("sparkdialog")).toBeTruthy();
  });
});
