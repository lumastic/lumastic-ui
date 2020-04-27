import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PostForm } from ".";

describe("PostForm tests", () => {
  test("Can mount", () => {
    render(<PostForm>Test</PostForm>);
    expect(screen.queryByTestId("postform")).toBeTruthy();
  });
});
