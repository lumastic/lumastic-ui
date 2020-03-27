import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PopupMenu } from ".";

describe("PopupMenu tests", () => {
  test("Can mount", () => {
    render(<PopupMenu>Test</PopupMenu>);
    expect(screen.queryByTestId("popupmenu")).toBeTruthy();
  });
});
