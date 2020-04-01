import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AppLayout } from ".";

describe("AppLayout tests", () => {
  test("Can mount", () => {
    render(<AppLayout>Test</AppLayout>);
    expect(screen.queryByTestId("applayout")).toBeTruthy();
  });
});
