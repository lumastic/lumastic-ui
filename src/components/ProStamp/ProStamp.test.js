import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProStamp } from ".";

describe("ProStamp tests", () => {
  test("Can mount", () => {
    render(<ProStamp>Test</ProStamp>);
    expect(screen.queryByTestId("prostamp")).toBeTruthy();
  });
});
