import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileHeader } from ".";

describe("ProfileHeader tests", () => {
  test("Can mount", () => {
    render(<ProfileHeader>Test</ProfileHeader>);
    expect(screen.queryByTestId("profileheader")).toBeTruthy();
  });
});
