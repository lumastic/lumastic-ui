import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Popover } from ".";

describe("Popover tests", () => {
  test("Can mount", () => {
    render(<Popover>Test</Popover>);
    expect(screen.queryByTestId("popover")).toBeTruthy();
  });
});
