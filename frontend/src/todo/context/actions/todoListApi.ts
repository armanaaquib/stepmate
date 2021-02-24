import doRequest from "../../../shared/api/doRequest";
import { Todo } from "../reducers/todoListReducer";

const TODO_URL = "/api/todo/";

const getTodoList = (): Promise<Todo[]> => {
  return doRequest<Todo[]>({ url: TODO_URL, method: "GET" });
};

export { getTodoList };
