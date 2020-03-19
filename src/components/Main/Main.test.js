import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from ".";

describe("Main tests", () => {
  test("Can mount", () => {
    render(<Main>Test</Main>);
    expect(screen.queryByTestId("main")).toBeTruthy();
  });
});
