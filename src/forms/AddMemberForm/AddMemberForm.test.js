import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AddMemberForm } from ".";

describe("AddMemberForm tests", () => {
  test("Can mount", () => {
    render(<AddMemberForm>Test</AddMemberForm>);
    expect(screen.queryByTestId("addmemberform")).toBeTruthy();
  });
});
