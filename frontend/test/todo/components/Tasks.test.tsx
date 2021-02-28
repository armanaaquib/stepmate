import React from "react";
import { render, screen } from "@testing-library/react";

import Tasks from "../../../src/todo/components/Tasks";
import { TaskType } from "../../../src/todo/context/reducers/todoListReducer";

describe("<Tasks />", () => {
  const entries: TaskType[] = [
    {
      id: 1,
      text: "task text",
      status: "TODO",
      createdAt: "",
      modifiedAt: "",
    },
    {
      id: 2,
      text: "task text 2",
      status: "TODO",
      createdAt: "",
      modifiedAt: "",
    },
  ];

  it("should not render tasks divider if there are no done tasks", () => {
    render(<Tasks entries={entries} />);

    expect(screen.queryByTestId("tasks-divider")).not.toBeInTheDocument();
  });

  it("should render tasks divider if there are done tasks", () => {
    const newEntries: TaskType[] = [
      ...entries,
      { ...entries[0], id: 3, status: "DONE" },
    ];
    render(<Tasks entries={newEntries} />);

    expect(screen.queryByTestId("tasks-divider")).toBeInTheDocument();
  });

  it("should render tasks", () => {
    const newEntries: TaskType[] = [
      ...entries,
      { ...entries[0], id: 3, status: "DONE" },
    ];
    const renderedTasks = render(<Tasks entries={newEntries} />);

    expect(renderedTasks).toMatchSnapshot();
  });

  it("should render no tasks", () => {
    const renderedTasks = render(<Tasks entries={[]} />);

    expect(renderedTasks).toMatchSnapshot();
  });
});
