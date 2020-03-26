import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("Card tests", () => {
  test("Can mount", () => {
    render(<Card>Test</Card>);
    expect(screen.queryByTestId("card")).toBeTruthy();
  });
});
