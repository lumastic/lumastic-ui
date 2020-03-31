import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Search } from ".";

describe("Search tests", () => {
  test("Can mount", () => {
    render(<Search>Test</Search>);
    expect(screen.queryByTestId("search")).toBeTruthy();
  });
});
