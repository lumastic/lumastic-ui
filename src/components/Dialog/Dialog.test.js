import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Dialog } from ".";

describe("Dialog tests", () => {
  test("Can mount", () => {
    render(<Dialog>Test</Dialog>);
    expect(screen.queryByTestId("dialog")).toBeTruthy();
  });
});
