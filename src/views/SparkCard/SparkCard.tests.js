import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { SparkCard } from ".";

describe("SparkCard tests", () => {
  test("Can mount", () => {
    render(
      <Router>
        <SparkCard>Test</SparkCard>
      </Router>
    );
    expect(screen.queryByTestId("sparkcard")).toBeTruthy();
  });
});
