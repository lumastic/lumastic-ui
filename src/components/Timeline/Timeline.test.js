import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Timeline } from ".";

describe("Timeline tests", () => {
  test("Can mount", () => {
    render(<Timeline>Test</Timeline>);
    expect(screen.queryByTestId("timeline")).toBeTruthy();
  });
});
