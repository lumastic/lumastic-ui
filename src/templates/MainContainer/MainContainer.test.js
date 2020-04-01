import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MainContainer } from ".";

describe("MainContainer tests", () => {
  test("Can mount", () => {
    render(<MainContainer>Test</MainContainer>);
    expect(screen.queryByTestId("maincontainer")).toBeTruthy();
  });
});
