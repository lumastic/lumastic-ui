import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MobileNav } from ".";

describe("SideNav tests", () => {
  test("Can mount", () => {
    render(<MobileNav>Test</MobileNav>);
    expect(screen.queryByTestId("sidenav")).toBeTruthy();
  });
});
