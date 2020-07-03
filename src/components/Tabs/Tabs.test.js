import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Tabs } from ".";

describe("Tabs tests", () => {
  test("Can mount", () => {
    render(<Tabs>Test</Tabs>);
    expect(screen.queryByTestId("tabs")).toBeTruthy();
  });
});
