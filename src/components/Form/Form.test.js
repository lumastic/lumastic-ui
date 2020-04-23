import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from ".";

describe("Form tests", () => {
  test("Can mount", () => {
    render(<Form>Test</Form>);
    expect(screen.queryByTestId("form")).toBeTruthy();
  });
});
