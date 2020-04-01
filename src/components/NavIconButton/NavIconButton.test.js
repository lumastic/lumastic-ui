import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NavIconButton } from ".";

describe("NavIconButton tests", () => {
  test("Can mount", () => {
    render(<NavIconButton>Test</NavIconButton>);
    expect(screen.queryByTestId("naviconbutton")).toBeTruthy();
  });
});
