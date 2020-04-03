import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Comment } from ".";

describe("Comment tests", () => {
  test("Can mount", () => {
    render(<Comment>Test</Comment>);
    expect(screen.queryByTestId("comment")).toBeTruthy();
  });
});
