import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { CommentForm } from ".";

describe("CommentForm tests", () => {
  test("Can mount", () => {
    render(<CommentForm>Test</CommentForm>);
    expect(screen.queryByTestId("commentform")).toBeTruthy();
  });
});
