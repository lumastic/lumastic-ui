import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MoreMenu } from ".";

describe("MoreMenu tests", () => {
  test("Can mount", () => {
    render(<MoreMenu>Test</MoreMenu>);
    expect(true).toBeTruthy();
  });
});
