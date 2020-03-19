import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Slash } from ".";

describe("Slash tests", () => {
  test("Can mount", () => {
    render(<Slash />);
    expect(screen.queryByTestId("slash")).toBeTruthy();
  });
});
