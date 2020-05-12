import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NewPostDialog } from ".";

describe("NewPostDialog tests", () => {
  test("Can mount", () => {
    render(<NewPostDialog>Test</NewPostDialog>);
    expect(screen.queryByTestId("newpostdialog")).toBeTruthy();
  });
});
