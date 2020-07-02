import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchForm } from ".";

describe("SearchForm tests", () => {
  test("Can mount", () => {
    render(<SearchForm>Test</SearchForm>);
    expect(screen.queryByTestId("searchform")).toBeTruthy();
  });
});
