import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { InputController } from ".";

describe("InputController tests", () => {
  test("Can mount", () => {
    render(<InputController>Test</InputController>);
    expect(screen.queryByTestId("inputcontroller")).toBeTruthy();
  });
});
