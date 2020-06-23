import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BoardForm } from ".";

describe("BoardForm tests", () => {
  test("Can mount", () => {
    render(<BoardForm>Test</BoardForm>);
    expect(screen.queryByTestId("boardform")).toBeTruthy();
  });
});
