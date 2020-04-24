import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkPeople } from ".";

describe("SparkPeople tests", () => {
  test("Can mount", () => {
    render(<SparkPeople>Test</SparkPeople>);
    expect(screen.queryByTestId("sparkpeople")).toBeTruthy();
  });
});
