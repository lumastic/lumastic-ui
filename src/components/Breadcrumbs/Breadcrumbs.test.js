import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from ".";

describe("Breadcrumbs tests", () => {
  test("Can mount", () => {
    render(<Breadcrumbs>Test</Breadcrumbs>);
    expect(screen.queryByTestId("breadcrumbs")).toBeTruthy();
  });
});
