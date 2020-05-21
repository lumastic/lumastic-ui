import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OrgSelect } from ".";

describe("OrgSelect tests", () => {
  test("Can mount", () => {
    render(<OrgSelect>Test</OrgSelect>);
    expect(screen.queryByTestId("orgselect")).toBeTruthy();
  });
});
