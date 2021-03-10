import { mocked } from "ts-jest/utils";

import {
  addTodo,
  getTodoList,
} from "../../../../src/todo/context/actions/todoService";
import doRequest from "../../../../src/shared/api/doRequest";

jest.mock("../../../../src/shared/api/doRequest");
const mockDoRequest = mocked(doRequest);

describe("todoListApi", () => {
  describe("getTodoList", () => {
    afterEach(() => {
      mockDoRequest.mockReset();
    });

    it("should resolve todo list if provided", () => {
      const todoList = [
        { id: 1, title: "todo", createdAt: "", modifiedAt: "", tasks: [] },
      ];
      mockDoRequest.mockResolvedValue(todoList);

      getTodoList().then((actualTodoList) => {
        expect(actualTodoList).toStrictEqual(todoList);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "GET",
      });
    });

    it("should reject errors if there is any", () => {
      const errors = [{ code: 1000, message: "Internal server error" }];
      mockDoRequest.mockRejectedValue(errors);

      getTodoList().catch((actualErrors) => {
        expect(actualErrors).toStrictEqual(errors);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "GET",
      });
    });
  });

  describe("addTodo", () => {
    afterEach(() => {
      mockDoRequest.mockReset();
    });

    it("should resolve todo if added", () => {
      const todo = {
        id: 1,
        title: "todo",
        createdAt: "",
        modifiedAt: "",
        tasks: [],
      };
      mockDoRequest.mockResolvedValue(todo);

      const requestTodo = { title: "todo", tasks: [] };
      addTodo(requestTodo).then((actualTodo) => {
        expect(actualTodo).toStrictEqual(todo);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "POST",
        data: requestTodo,
      });
    });

    it("should reject errors if there is any in adding todo", () => {
      const errors = [{ code: 1000, message: "Internal server error" }];
      mockDoRequest.mockRejectedValue(errors);

      const requestTodo = { title: "todo", tasks: [] };
      addTodo(requestTodo).catch((errors) => {
        expect(errors).toStrictEqual(errors);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "POST",
        data: requestTodo,
      });
    });
  });
});
