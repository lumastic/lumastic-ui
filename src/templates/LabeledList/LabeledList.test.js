import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LabeledList } from ".";

describe("LabeledList tests", () => {
  test("Can mount", () => {
    render(<LabeledList>Test</LabeledList>);
    expect(screen.queryByTestId("labeledlist")).toBeTruthy();
  });
});
