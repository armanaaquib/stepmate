import React from "react";
import { render, screen } from "@testing-library/react";

import TaskContainer from "../../../src/todo/components/TaskContainer";
import Task from "../../../src/todo/context/types/task";

describe("<Task />", () => {
  it("should render task with text", () => {
    const entry: Task = {
      id: 1,
      text: "task text",
      status: "TODO",
      createdAt: "",
      modifiedAt: "",
    };
    render(<TaskContainer entry={entry} />);

    expect(screen.getByText(entry.text)).toBeInTheDocument();
  });
});
