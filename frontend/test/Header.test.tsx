import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/Header";
import avatar from "../src/shared/images/avatar.png";

describe("<Header />", () => {
  it("should render header", () => {
    render(<Header />);
  });

  it("should contain app icon", () => {
    render(<Header />);

    expect(screen.getByTestId("app-icon")).toBeInTheDocument();
  });

  it("should contain nav links", () => {
    render(<Header />);

    expect(screen.getByText(/Blog/)).toBeInTheDocument();
    expect(screen.getByText(/Q&A/)).toBeInTheDocument();
    expect(screen.getByText(/Todo/)).toBeInTheDocument();
    expect(screen.getByText(/Notes/)).toBeInTheDocument();
  });

  it("should contain user avatar", () => {
    render(<Header />);

    expect(screen.getByAltText(/Avatar/)).toHaveAttribute("src", avatar);
  });
});
