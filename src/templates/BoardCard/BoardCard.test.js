import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BoardCard } from ".";

describe("BoardCard tests", () => {
  test("Can mount", () => {
    render(<BoardCard>Test</BoardCard>);
    expect(screen.queryByTestId("boardcard")).toBeTruthy();
  });
});
