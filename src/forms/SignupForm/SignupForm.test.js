import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { SignupForm } from ".";

describe("SignupForm tests", () => {
  test("Can mount", () => {
    render(<SignupForm>Test</SignupForm>);
    expect(screen.queryByTestId("signupform")).toBeTruthy();
  });
});
