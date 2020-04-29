import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PageSignature } from ".";

describe("PageSignature tests", () => {
  test("Can mount", () => {
    render(<PageSignature>Test</PageSignature>);
    expect(screen.queryByTestId("pagesignature")).toBeTruthy();
  });
});
