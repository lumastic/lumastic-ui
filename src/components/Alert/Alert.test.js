import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert } from ".";

describe("Alert tests", () => {
  test("Can mount", () => {
    render(<Alert>Test</Alert>);
    expect(screen.queryByTestId("alert")).toBeTruthy();
  });
});
