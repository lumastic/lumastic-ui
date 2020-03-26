import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Popup } from ".";

describe("Popup tests", () => {
  test("Can mount", () => {
    render(<Popup>Test</Popup>);
    expect(screen.queryByTestId("popup")).toBeTruthy();
  });
});
