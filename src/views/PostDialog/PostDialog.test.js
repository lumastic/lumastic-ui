import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PostDialog } from ".";

describe("NewPostDialog tests", () => {
  test("Can mount", () => {
    render(<PostDialog>Test</PostDialog>);
    expect(screen.queryByTestId("postdialog")).toBeTruthy();
  });
});
