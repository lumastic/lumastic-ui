import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TeamForm } from ".";

describe("TeamForm tests", () => {
  test("Can mount", () => {
    render(<TeamForm>Test</TeamForm>);
    expect(screen.queryByTestId("teamform")).toBeTruthy();
  });
});
