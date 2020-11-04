import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { FormSaver } from ".";

describe("FormSaver tests", () => {
  test("Can mount", () => {
    render(<FormSaver>Test</FormSaver>);
    expect(screen.queryByTestId("formsaver")).toBeTruthy();
  });
});
