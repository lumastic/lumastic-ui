import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from ".";

describe("Avatar tests", () => {
  test("Can mount", () => {
    render(<Avatar>Test</Avatar>);
    expect(screen.queryByTestId("avatar")).toBeTruthy();
  });
});
