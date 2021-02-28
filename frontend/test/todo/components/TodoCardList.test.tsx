import React from "react";
import { render, RenderResult, screen } from "@testing-library/react";

import TodoCardList from "../../../src/todo/components/TodoCardList";
import { TodoListContext } from "../../../src/todo/context/TodoListProvider";
import {
  State,
  Todo,
} from "../../../src/todo/context/reducers/todoListReducer";

describe("<TodoCardList />", () => {
  const renderTodoCardList = (
    state: State,
    actions: Record<string, () => Promise<void>>
  ): RenderResult => {
    return render(
      <TodoListContext.Provider value={{ state, actions }}>
        <TodoCardList />
      </TodoListContext.Provider>
    );
  };

  it("should call loadTodoList action once", () => {
    const mockLoadTodoList = jest.fn();

    renderTodoCardList(
      { error: false, loading: false, data: [] },
      { loadTodoList: mockLoadTodoList }
    );

    expect(mockLoadTodoList).toHaveBeenCalledTimes(1);
  });

  it("should show error message if there is an error in loading todo list", () => {
    renderTodoCardList(
      { error: true, loading: false, data: [] },
      { loadTodoList: jest.fn() }
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("should show todo cards", () => {
    const data: Todo[] = [
      {
        id: 1,
        title: "todo header",
        createdAt: "",
        modifiedAt: "",
        userId: 1,
        tasks: [
          {
            id: 1,
            text: "task",
            status: "IN_PROGRESS",
            createdAt: "",
            modifiedAt: "",
          },
        ],
      },
      {
        id: 2,
        title: "todo header",
        createdAt: "",
        modifiedAt: "",
        userId: 1,
        tasks: [],
      },
    ];

    const renderResult = renderTodoCardList(
      { error: false, loading: false, data },
      { loadTodoList: jest.fn() }
    );

    expect(renderResult).toMatchSnapshot();
  });
});
