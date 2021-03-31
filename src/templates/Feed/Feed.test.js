import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Feed } from ".";

describe("Feed tests", () => {
  test("Can mount", () => {
    render(<Feed>Test</Feed>);
    expect(screen.queryByTestId("feed")).toBeTruthy();
  });
});
