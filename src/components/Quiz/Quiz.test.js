import React from "react";
import { render } from "@testing-library/react";
import Quiz from "./Quiz";

describe("Quiz tests", () => {
  it("should render", () => {
    expect(render(<Quiz />)).toBeTruthy();
  });
});
