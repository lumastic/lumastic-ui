import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginForm } from ".";

describe("LoginForm tests", () => {
  test("Can mount", () => {
    render(<LoginForm>Test</LoginForm>);
    expect(screen.queryByTestId("loginform")).toBeTruthy();
  });
});
