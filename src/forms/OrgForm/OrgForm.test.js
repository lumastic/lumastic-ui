import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OrgForm } from ".";

describe("OrgForm tests", () => {
  test("Can mount", () => {
    render(<OrgForm>Test</OrgForm>);
    expect(screen.queryByTestId("orgform")).toBeTruthy();
  });
});
