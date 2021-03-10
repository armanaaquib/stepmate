import { mocked } from "ts-jest/utils";

import todoListActions from "../../../../src/todo/context/actions/todoListActions";
import {
  getTodoList,
  addTodo,
} from "../../../../src/todo/context/actions/todoService";
import Actions from "../../../../src/todo/context/types/actions";
import ActionTypes from "../../../../src/todo/context/types/actionsTypes";

jest.mock("../../../../src/todo/context/actions/todoService");

describe("todoListActions", () => {
  const mockDispatch = jest.fn();
  let actions: Actions;

  describe("loadTodoList", () => {
    const mockedGetTodoList = mocked(getTodoList);

    beforeEach(() => {
      actions = todoListActions(mockDispatch);
    });

    afterEach(() => {
      mockDispatch.mockReset();
      mockedGetTodoList.mockReset();
    });

    it("should call dispatch with actions when todo list is fetched", async () => {
      mockedGetTodoList.mockResolvedValue([]);

      await actions.loadTodoList();

      expect(mockedGetTodoList).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.LOAD_TODO_LIST,
        payload: [],
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });

    it("should call dispatch with actions when todo list is not fetched", async () => {
      mockedGetTodoList.mockRejectedValue([]);

      await actions.loadTodoList();

      expect(mockedGetTodoList).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ERROR_IN_LOADING_TODO_LIST,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });
  });

  describe("addTodo", () => {
    const mockedAddTodo = mocked(addTodo);

    beforeEach(() => {
      actions = todoListActions(mockDispatch);
    });

    afterEach(() => {
      mockDispatch.mockReset();
      mockedAddTodo.mockReset();
    });

    it("should call dispatch with actions when todo is added", async () => {
      const todo = {
        id: 1,
        title: "todo",
        createdAt: "",
        modifiedAt: "",
        userId: 1,
        tasks: [],
      };
      mockedAddTodo.mockResolvedValue(todo);

      const todoRuquest = { title: "todo", tasks: [] };
      await actions.addTodo(todoRuquest);

      expect(mockedAddTodo).toHaveBeenCalledWith(todoRuquest);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ADD_TODO,
        payload: todo,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });

    it("should call dispatch with actions when todo is not added", async () => {
      mockedAddTodo.mockRejectedValue([]);

      const todoRuquest = { title: "todo", tasks: [] };
      await actions.addTodo(todoRuquest);

      expect(mockedAddTodo).toHaveBeenCalledWith(todoRuquest);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });
  });
});
