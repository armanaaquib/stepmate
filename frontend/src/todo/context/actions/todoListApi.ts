import doRequest from "../../../shared/api/doRequest";
import Todo from "../types/todo";

const TODO_URL = "/api/todo/";

const getTodoList = (): Promise<Todo[]> => {
  return doRequest<Todo[]>({ url: TODO_URL, method: "GET" });
};

export { getTodoList };
