import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Menu } from ".";

describe("Menu tests", () => {
  test("Can mount", () => {
    render(<Menu>Test</Menu>);
    expect(screen.queryByTestId("menu")).toBeTruthy();
  });
});
