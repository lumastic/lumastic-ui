import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Masonry } from ".";

describe("Masonry tests", () => {
  test("Can mount", () => {
    render(<Masonry>Test</Masonry>);
    expect(screen.queryByTestId("masonry")).toBeTruthy();
  });
});
