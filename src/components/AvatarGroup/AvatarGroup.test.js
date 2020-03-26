import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AvatarGroup } from ".";

describe("AvatarGroup tests", () => {
  test("Can mount", () => {
    render(<AvatarGroup>Test</AvatarGroup>);
    expect(screen.queryByTestId("avatargroup")).toBeTruthy();
  });
});
