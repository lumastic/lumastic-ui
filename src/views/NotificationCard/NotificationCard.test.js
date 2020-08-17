import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NotificationCard } from ".";

describe("NotificationCard tests", () => {
  test("Can mount", () => {
    render(<NotificationCard>Test</NotificationCard>);
    expect(screen.queryByTestId("notificationcard")).toBeTruthy();
  });
});
