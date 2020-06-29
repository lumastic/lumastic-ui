import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LeftPush } from ".";

describe("LeftPush tests", () => {
  test("Can mount", () => {
    render(<LeftPush>Test</LeftPush>);
    expect(screen.queryByTestId("leftpush")).toBeTruthy();
  });
});
