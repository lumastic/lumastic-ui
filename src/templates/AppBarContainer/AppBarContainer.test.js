import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AppBarContainer } from ".";

describe("AppBarContainer tests", () => {
  test("Can mount", () => {
    render(<AppBarContainer>Test</AppBarContainer>);
    expect(screen.queryByTestId("appbarcontainer")).toBeTruthy();
  });
});
