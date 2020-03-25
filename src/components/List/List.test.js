import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from ".";

describe("List tests", () => {
  test("Can mount", () => {
    render(<List>Test</List>);
    expect(screen.queryByTestId("list")).toBeTruthy();
  });
});
