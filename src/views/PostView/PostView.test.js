import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PostView } from ".";

describe("PostView tests", () => {
  test("Can mount", () => {
    render(<PostView>Test</PostView>);
    expect(screen.queryByTestId("postview")).toBeTruthy();
  });
});
