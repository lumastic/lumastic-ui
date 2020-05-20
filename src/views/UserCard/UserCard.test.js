import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { UserCard } from ".";

describe("UserCard tests", () => {
  test("Can mount", () => {
    render(<UserCard>Test</UserCard>);
    expect(screen.queryByTestId("usercard")).toBeTruthy();
  });
});
