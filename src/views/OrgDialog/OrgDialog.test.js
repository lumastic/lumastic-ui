import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { OrgDialog } from ".";

describe("OrgDialog tests", () => {
  test("Can mount", () => {
    render(<OrgDialog>Test</OrgDialog>);
    expect(screen.queryByTestId("orgdialog")).toBeTruthy();
  });
});
