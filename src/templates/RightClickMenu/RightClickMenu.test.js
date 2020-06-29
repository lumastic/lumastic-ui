import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { RightClickMenu } from ".";

describe("RightClickMenu tests", () => {
  test("Can mount", () => {
    render(<RightClickMenu>Test</RightClickMenu>);
    expect(screen.queryByTestId("rightclickmenu")).toBeTruthy();
  });
});
