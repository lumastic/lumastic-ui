import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Sidebar } from ".";

describe("Sidebar tests", () => {
  test("Can mount", () => {
    render(<Sidebar>Test</Sidebar>);
    expect(screen.queryByTestId("sidebar")).toBeTruthy();
  });
});
