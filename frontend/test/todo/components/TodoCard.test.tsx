import React from "react";
import { render, screen } from "@testing-library/react";

import TodoCard from "../../../src/todo/components/TodoCard";
import { Todo } from "../../../src/todo/context/reducers/todoListReducer";

describe("<TodoCard />", () => {
  it("should render todo header", () => {
    const entry: Todo = {
      id: 1,
      title: "todo header",
      createdAt: "",
      modifiedAt: "",
      userId: 1,
      tasks: [],
    };
    render(<TodoCard entry={entry} />);

    expect(screen.getByText(entry.title)).toBeInTheDocument();
  });

  it("should render todo tasks", () => {
    const entry: Todo = {
      id: 1,
      title: "todo header",
      createdAt: "",
      modifiedAt: "",
      userId: 1,
      tasks: [],
    };
    render(<TodoCard entry={entry} />);

    expect(screen.getByTestId("tasks")).toBeInTheDocument();
  });
});
