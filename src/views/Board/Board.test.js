import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from ".";

describe("Board tests", () => {
  test("Can mount", () => {
    render(<Board>Test</Board>);
    expect(screen.queryByTestId("board")).toBeTruthy();
  });
});
