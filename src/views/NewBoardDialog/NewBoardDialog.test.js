import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NewBoardDialog } from ".";

describe("NewBoardDialog tests", () => {
  test("Can mount", () => {
    render(<NewBoardDialog>Test</NewBoardDialog>);
    expect(screen.queryByTestId("newboarddialog")).toBeTruthy();
  });
});
