import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Reactions } from ".";

describe("Reactions tests", () => {
  test("Can mount", () => {
    render(<Reactions>Test</Reactions>);
    expect(screen.queryByTestId("reactions")).toBeTruthy();
  });
});
