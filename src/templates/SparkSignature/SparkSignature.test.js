import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkSignature } from ".";

describe("SparkSignature tests", () => {
  test("Can mount", () => {
    render(<SparkSignature>Test</SparkSignature>);
    expect(screen.queryByTestId("sparksignature")).toBeTruthy();
  });
});
