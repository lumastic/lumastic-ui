import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button tests", () => {
  test("Can mount", () => {
    render(<Button>Test</Button>);
    expect(screen.queryByTestId("button")).toBeTruthy();
  });
});
