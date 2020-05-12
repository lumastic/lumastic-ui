import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NewSparkDialog } from ".";

describe("NewSparkDialog tests", () => {
  test("Can mount", () => {
    render(<NewSparkDialog>Test</NewSparkDialog>);
    expect(screen.queryByTestId("newsparkdialog")).toBeTruthy();
  });
});
