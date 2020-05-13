import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingScreen } from ".";

describe("LoadingScreen tests", () => {
  test("Can mount", () => {
    render(<LoadingScreen>Test</LoadingScreen>);
    expect(screen.queryByTestId("loadingscreen")).toBeTruthy();
  });
});
