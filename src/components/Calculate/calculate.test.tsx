import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./index";

describe("Calculator", () => {
  test("renders digit button and displays correct number when clicked", () => {
    render(<Calculator />);

    // Adjust the selector to be more specific
    const button = screen.getByRole("button", { name: /1/i });
    fireEvent.click(button);
  });
});
