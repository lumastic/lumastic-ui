import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AddEmoji } from ".";

describe("AddEmoji tests", () => {
  test("Can mount", () => {
    render(<AddEmoji>Test</AddEmoji>);
    expect(screen.queryByTestId("addemoji")).toBeTruthy();
  });
});
