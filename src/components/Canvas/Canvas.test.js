import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Canvas } from ".";

describe("Canvas tests", () => {
  test("Can mount", () => {
    render(<Canvas>Test</Canvas>);
    expect(screen.queryByTestId("canvas")).toBeTruthy();
  });
});
