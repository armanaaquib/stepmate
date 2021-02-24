import { mocked } from "ts-jest/utils";

import { getTodoList } from "../../../../src/todo/context/actions/todoListApi";
import doRequest from "../../../../src/shared/api/doRequest";

jest.mock("../../../../src/shared/api/doRequest");
const mockDoRequest = mocked(doRequest);

describe("todoListApi", () => {
  describe("getTodoList", () => {
    it("should resolve todo list if provided", () => {
      const todoList = [
        { id: 1, title: "todo", createdAt: "", modifiedAt: "", tasks: [] },
      ];
      mockDoRequest.mockResolvedValue(todoList);

      getTodoList().then((todoList) => {
        expect(todoList).toStrictEqual(todoList);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "GET",
      });
    });

    it("should reject errors if there is any", () => {
      const errors = [{ code: 1000, message: "Internal server error" }];
      mockDoRequest.mockRejectedValue(errors);

      getTodoList().catch((errors) => {
        expect(errors).toStrictEqual(errors);
      });

      expect(mockDoRequest.mock.calls[0][0]).toStrictEqual({
        url: "/api/todo/",
        method: "GET",
      });
    });
  });
});
