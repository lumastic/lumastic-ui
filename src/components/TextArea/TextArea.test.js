import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TextArea } from ".";

describe("TextArea tests", () => {
  test("Can mount", () => {
    render(<TextArea>Test</TextArea>);
    expect(screen.queryByTestId("textarea")).toBeTruthy();
  });
});
