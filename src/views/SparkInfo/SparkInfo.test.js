import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkInfo } from ".";

describe("SparkInfo tests", () => {
  test("Can mount", () => {
    render(<SparkInfo>Test</SparkInfo>);
    expect(screen.queryByTestId("sparkinfo")).toBeTruthy();
  });
});
