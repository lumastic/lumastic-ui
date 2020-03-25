import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Signature } from ".";

describe("Signature tests", () => {
  test("Can mount", () => {
    render(<Signature>Test</Signature>);
    expect(screen.queryByTestId("signature")).toBeTruthy();
  });
});
