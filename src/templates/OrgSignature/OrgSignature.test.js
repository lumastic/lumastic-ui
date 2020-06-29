import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OrgSignature } from ".";

describe("OrgSignature tests", () => {
  test("Can mount", () => {
    render(<OrgSignature>Test</OrgSignature>);
    expect(screen.queryByTestId("orgsignature")).toBeTruthy();
  });
});
