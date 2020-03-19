import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TextInput } from ".";

describe("TextInput tests", () => {
  test("Can mount", () => {
    render(<TextInput />);
    expect(screen.queryByTestId("textinput")).toBeTruthy();
  });
});
