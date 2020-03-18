import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { IconButton } from ".";

describe("Button tests", () => {
  test("Can mount", () => {
    render(<IconButton>Test</IconButton>);
    expect(screen.queryByText("Test")).toBeTruthy();
  });
});
