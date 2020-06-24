import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchSelect } from ".";

describe("SearchSelect tests", () => {
  test("Can mount", () => {
    render(<SearchSelect>Test</SearchSelect>);
    expect(screen.queryByTestId("searchselect")).toBeTruthy();
  });
});
