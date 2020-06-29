import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BoardSelect } from ".";

describe("BoardSelect tests", () => {
  test("Can mount", () => {
    render(<BoardSelect>Test</BoardSelect>);
    expect(screen.queryByTestId("boardselect")).toBeTruthy();
  });
});
