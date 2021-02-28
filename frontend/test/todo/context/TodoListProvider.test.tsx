import React, { useContext } from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import TodoListProvider, {
  TodoListContext,
} from "../../../src/todo/context/TodoListProvider";

import todoListActions from "../../../src/todo/context/actions/todoListActions";
jest.mock("../../../src/todo/context/actions/todoListActions");
const mockTodoListActions = mocked(todoListActions);

describe("<TodoListProvider />", () => {
  it("should provide state and actions", () => {
    const mockAction = jest.fn();
    mockTodoListActions.mockReturnValue({ action: mockAction });

    const Child = () => {
      const { state, actions } = useContext(TodoListContext);
      actions.action();

      expect(state).toStrictEqual({ error: false, loading: false, data: [] });

      return <></>;
    };

    render(
      <TodoListProvider>
        <Child />
      </TodoListProvider>
    );

    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
