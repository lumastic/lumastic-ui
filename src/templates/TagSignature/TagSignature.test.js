import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TagSignature } from ".";

describe("TagSignature tests", () => {
  test("Can mount", () => {
    render(<TagSignature>Test</TagSignature>);
    expect(screen.queryByTestId("tagsignature")).toBeTruthy();
  });
});
