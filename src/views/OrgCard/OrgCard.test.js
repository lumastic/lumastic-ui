import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OrgCard } from ".";

describe("OrgCard tests", () => {
  test("Can mount", () => {
    render(<OrgCard>Test</OrgCard>);
    expect(screen.queryByTestId("orgcard")).toBeTruthy();
  });
});
