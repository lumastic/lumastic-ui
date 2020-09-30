import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Slideshow } from ".";

describe("Slideshow tests", () => {
  test("Can mount", () => {
    render(<Slideshow>Test</Slideshow>);
    expect(screen.queryByTestId("slideshow")).toBeTruthy();
  });
});
