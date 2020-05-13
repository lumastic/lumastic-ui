import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from ".";

describe("LoadingSpinner tests", () => {
  test("Can mount", () => {
    render(<LoadingSpinner>Test</LoadingSpinner>);
    expect(screen.queryByTestId("loadingspinner")).toBeTruthy();
  });
});
