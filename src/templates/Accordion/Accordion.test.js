import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Accordion } from ".";

describe("Accordion tests", () => {
  test("Can mount", () => {
    render(<Accordion>Test</Accordion>);
    expect(screen.queryByTestId("accordion")).toBeTruthy();
  });
});
