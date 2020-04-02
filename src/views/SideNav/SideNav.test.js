import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SideNav } from ".";

describe("SideNav tests", () => {
  test("Can mount", () => {
    render(<SideNav>Test</SideNav>);
    expect(screen.queryByTestId("sidenav")).toBeTruthy();
  });
});
