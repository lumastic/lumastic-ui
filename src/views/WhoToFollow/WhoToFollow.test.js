import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { WhoToFollow } from ".";

describe("WhoToFollow tests", () => {
  test("Can mount", () => {
    render(<WhoToFollow>Test</WhoToFollow>);
    expect(screen.queryByTestId("whotofollow")).toBeTruthy();
  });
});
