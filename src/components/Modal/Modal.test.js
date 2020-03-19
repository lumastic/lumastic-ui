import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from ".";

describe("Modal tests", () => {
  test("Can mount", () => {
    render(<Modal>Test</Modal>);
    expect(screen.queryByTestId("modal")).toBeTruthy();
  });
});
