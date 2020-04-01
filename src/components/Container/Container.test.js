import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from ".";

describe("Container tests", () => {
  test("Can mount", () => {
    render(<Container>Test</Container>);
    expect(screen.queryByTestId("container")).toBeTruthy();
  });
});
