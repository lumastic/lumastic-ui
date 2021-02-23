import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressPost } from ".";
import { postWithComments } from "../../data/post.db.js";

describe("ProgressPost tests", () => {
  test("Can mount", () => {
    render(
      <ProgressPost spark={{ title: "Spark Title" }} post={postWithComments} />
    );
    expect(screen.queryByTestId("progresspost")).toBeTruthy();
  });
});
