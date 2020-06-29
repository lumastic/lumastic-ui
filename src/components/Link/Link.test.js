import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from ".";

describe("Link tests", () => {
  test("Can mount", () => {
    render(<Link>Test</Link>);
    expect(screen.queryByTestId("link")).toBeTruthy();
  });
});
