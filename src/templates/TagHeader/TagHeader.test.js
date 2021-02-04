import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TagHeader } from ".";

describe("TagHeader tests", () => {
  test("Can mount", () => {
    render(<TagHeader>Test</TagHeader>);
    expect(screen.queryByTestId("tagheader")).toBeTruthy();
  });
});
