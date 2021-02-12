import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../src/Header";
import avatar from "../src/shared/images/avatar.png";
import { MemoryRouter, Route } from "react-router-dom";

describe("<Header />", () => {
  const renderWithRouter = (component: ReactElement): void => {
    render(component, { wrapper: MemoryRouter });
  };

  it("should render header", () => {
    renderWithRouter(<Header />);
  });

  it("should contain app icon", () => {
    renderWithRouter(<Header />);

    expect(screen.getByTestId("app-icon")).toBeInTheDocument();
  });

  it("should contain nav links", () => {
    renderWithRouter(<Header />);

    expect(screen.getByText(/Blog/)).toBeInTheDocument();
    expect(screen.getByText(/Q&A/)).toBeInTheDocument();
    expect(screen.getByText(/Todo/)).toBeInTheDocument();
    expect(screen.getByText(/Notes/)).toBeInTheDocument();
  });

  it("should contain user avatar", () => {
    renderWithRouter(<Header />);

    expect(screen.getByAltText(/Avatar/)).toHaveAttribute("src", avatar);
  });

  describe("navLinks behaviour test", () => {
    const getMockRoute = (appName: string): ReactElement => (
      <Route path={`/${appName}`}>
        <div data-testid={`${appName}-app`}></div>
      </Route>
    );

    it("should render blog app on clicking blog", () => {
      render(
        <MemoryRouter>
          <Header />
          {getMockRoute("blog")}
        </MemoryRouter>
      );

      userEvent.click(screen.getByText(/Blog/));

      expect(screen.getByTestId("blog-app")).toBeInTheDocument();
    });

    it("should render q&a app on clicking q&a", () => {
      render(
        <MemoryRouter>
          <Header />
          {getMockRoute("q&a")}
        </MemoryRouter>
      );

      userEvent.click(screen.getByText(/Q&A/));

      expect(screen.getByTestId("q&a-app")).toBeInTheDocument();
    });

    it("should render todo app on clicking todo", () => {
      render(
        <MemoryRouter>
          <Header />
          {getMockRoute("todo")}
        </MemoryRouter>
      );

      userEvent.click(screen.getByText(/Todo/));

      expect(screen.getByTestId("todo-app")).toBeInTheDocument();
    });

    it("should render notes app on clicking notes", () => {
      render(
        <MemoryRouter>
          <Header />
          {getMockRoute("notes")}
        </MemoryRouter>
      );

      userEvent.click(screen.getByText(/Notes/));

      expect(screen.getByTestId("notes-app")).toBeInTheDocument();
    });
  });
});
