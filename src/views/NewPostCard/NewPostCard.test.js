import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NewPostCard } from ".";

describe("NewPostCard tests", () => {
  test("Can mount", () => {
    render(<NewPostCard>Test</NewPostCard>);
    expect(screen.queryByTestId("newpostcard")).toBeTruthy();
  });
});
