import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Tag } from ".";

describe("Tag tests", () => {
  test("Can mount", () => {
    render(<Tag>Test</Tag>);
    expect(screen.queryByTestId("tag")).toBeTruthy();
  });
});
