import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TabNav } from ".";

describe("TabNav tests", () => {
  test("Can mount", () => {
    render(<TabNav>Test</TabNav>);
    expect(screen.queryByTestId("tabnav")).toBeTruthy();
  });
});
