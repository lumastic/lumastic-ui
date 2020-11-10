import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from ".";

describe("Table tests", () => {
  test("Can mount", () => {
    render(<Table>Test</Table>);
    expect(screen.queryByTestId("table")).toBeTruthy();
  });
});
