import { mocked } from "ts-jest/utils";

import ActionTypes from "../../../../src/todo/context/actions/actionsTypes";
import todoListActions from "../../../../src/todo/context/actions/todoListActions";
import { getTodoList } from "../../../../src/todo/context/actions/todoListApi";

jest.mock("../../../../src/todo/context/actions/todoListApi");
const mockedGetTodoList = mocked(getTodoList);

describe("todoListActions", () => {
  const mockDispatch = jest.fn();
  let actions: ReturnType<typeof todoListActions>;

  describe("loadTodoList", () => {
    beforeEach(() => {
      actions = todoListActions(mockDispatch);
    });

    afterEach(() => {
      mockDispatch.mockReset();
    });

    it("should call dispatch with LOAD_TODO_LIST as action type and todoList as payload", async () => {
      mockedGetTodoList.mockResolvedValue([]);

      await actions.loadTodoList();

      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.LOAD_TODO_LIST,
        payload: [],
      });
    });
  });
});
