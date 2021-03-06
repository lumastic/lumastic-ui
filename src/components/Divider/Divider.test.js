import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Divider } from ".";

describe("Divider tests", () => {
  test("Can mount", () => {
    render(<Divider />);
    expect(screen.queryByTestId("divider")).toBeTruthy();
  });
});
