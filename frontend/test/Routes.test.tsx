import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Routes from "../src/Routes";
import { MemoryRouter } from "react-router-dom";
import { mocked } from "ts-jest/utils";

import doRequest from "../src/shared/api/doRequest";
jest.mock("../src/shared/api/doRequest");
const mockDoRequest = mocked(doRequest);

describe("<Routes />", () => {
  it("should render todo app on / path", async () => {
    mockDoRequest.mockResolvedValue([]);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

    await waitFor(() => expect(mockDoRequest).toHaveBeenCalledTimes(1));

    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });

  it("should render todo app on /todo path", async () => {
    mockDoRequest.mockResolvedValue([]);

    render(
      <MemoryRouter initialEntries={["/todo"]}>
        <Routes />
      </MemoryRouter>
    );

    await waitFor(() => expect(mockDoRequest).toHaveBeenCalledTimes(2));

    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });
});
