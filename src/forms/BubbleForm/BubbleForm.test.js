import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BubbleForm } from ".";

describe("BubbleForm tests", () => {
  test("Can mount", () => {
    render(<BubbleForm>Test</BubbleForm>);
    expect(screen.queryByTestId("bubbleform")).toBeTruthy();
  });
});
