import React from "react";
import { render, screen } from "@testing-library/react";

import Task from "../../../src/todo/components/Task";
import { TaskType } from "../../../src/todo/context/reducers/todoListReducer";

describe("<Task />", () => {
  it("should render task with text", () => {
    const entry: TaskType = {
      id: 1,
      text: "task text",
      status: "TODO",
      createdAt: "",
      modifiedAt: "",
    };
    render(<Task entry={entry} />);

    expect(screen.getByText(entry.text)).toBeInTheDocument();
  });
});
