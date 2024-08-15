import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "./index";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  test("renders digit buttons and operation buttons", () => {
    expect(screen.getByTestId("button-0")).toBeInTheDocument();
    expect(screen.getByTestId("button-1")).toBeInTheDocument();
    expect(screen.getByTestId("button-2")).toBeInTheDocument();
    expect(screen.getByTestId("button-3")).toBeInTheDocument();
    expect(screen.getByTestId("button-4")).toBeInTheDocument();
    expect(screen.getByTestId("button-5")).toBeInTheDocument();
    expect(screen.getByTestId("button-6")).toBeInTheDocument();
    expect(screen.getByTestId("button-7")).toBeInTheDocument();
    expect(screen.getByTestId("button-8")).toBeInTheDocument();
    expect(screen.getByTestId("button-9")).toBeInTheDocument();
    expect(screen.getByTestId("button-add")).toBeInTheDocument();
    expect(screen.getByTestId("button-subtract")).toBeInTheDocument();
    expect(screen.getByTestId("button-multiply")).toBeInTheDocument();
    expect(screen.getByTestId("button-divide")).toBeInTheDocument();
    expect(screen.getByTestId("button-equals")).toBeInTheDocument();
    expect(screen.getByTestId("button-clear")).toBeInTheDocument();
  });

  test("displays the correct number when a digit is clicked", () => {
    fireEvent.click(screen.getByTestId("button-2"));
    expect(screen.getByTestId("display")).toHaveTextContent("2");
  });

  test("performs addition operation correctly", () => {
    fireEvent.click(screen.getByTestId("button-1"));
    fireEvent.click(screen.getByTestId("button-add"));
    fireEvent.click(screen.getByTestId("button-2"));
    fireEvent.click(screen.getByTestId("button-equals"));
    expect(screen.getByTestId("display")).toHaveTextContent("3");
  });

  test("handles clear button correctly", () => {
    fireEvent.click(screen.getByTestId("button-1"));
    fireEvent.click(screen.getByTestId("button-add"));
    fireEvent.click(screen.getByTestId("button-2"));
    fireEvent.click(screen.getByTestId("button-clear"));
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });
});
