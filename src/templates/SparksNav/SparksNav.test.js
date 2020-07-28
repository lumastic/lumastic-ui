import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SparksNav } from ".";

describe("SparksNav tests", () => {
  test("Can mount", () => {
    render(<SparksNav>Test</SparksNav>);
    expect(screen.queryByTestId("sparksnav")).toBeTruthy();
  });
});
