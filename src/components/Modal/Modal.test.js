import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { Modal } from ".";

describe("Modal tests", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("Can mount", () => {
    render(<Modal isShowing>Test</Modal>);
    expect(screen.queryByText("Test")).toBeTruthy();
  });
});
