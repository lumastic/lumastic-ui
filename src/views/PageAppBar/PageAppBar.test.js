import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PageAppBar } from ".";

describe("PageAppBar tests", () => {
  test("Can mount", () => {
    render(
      <Router>
        <PageAppBar>Test</PageAppBar>
      </Router>
    );
    expect(screen.queryByTestId("pageappbar")).toBeTruthy();
  });
});
