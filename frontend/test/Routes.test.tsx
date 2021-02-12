import React from "react";
import { render, screen } from "@testing-library/react";

import Routes from "../src/Routes";
import { MemoryRouter } from "react-router-dom";

describe("<Routes />", () => {
  it("should render todo app on / path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("todo-app")).toBeInTheDocument();
  });

  it("should render todo app on /todo path", () => {
    render(
      <MemoryRouter initialEntries={["/todo"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByTestId("todo-app")).toBeInTheDocument();
  });
});
