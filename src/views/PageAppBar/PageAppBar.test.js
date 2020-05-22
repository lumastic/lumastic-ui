import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PageAppBar } from ".";

describe("PageAppBar tests", () => {
  test("Can mount", () => {
    render(<PageAppBar>Test</PageAppBar>);
    expect(screen.queryByTestId("pageappbar")).toBeTruthy();
  });
});
