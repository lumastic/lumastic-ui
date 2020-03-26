import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Tab } from ".";

describe("Tab tests", () => {
  test("Can mount", () => {
    render(<Tab>Test</Tab>);
    expect(screen.queryByTestId("tab")).toBeTruthy();
  });
});
