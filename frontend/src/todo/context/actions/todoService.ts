import doRequest from "../../../shared/api/doRequest";
import Todo, { TodoRequest } from "../types/todo";

const TODO_URL = "/api/todo/";

const getTodoList = (): Promise<Todo[]> => {
  return doRequest<Todo[]>({ url: TODO_URL, method: "GET" });
};

const addTodo = (requestTodo: TodoRequest): Promise<Todo> => {
  return doRequest<Todo>({ url: TODO_URL, method: "POST", data: requestTodo });
};

export { getTodoList, addTodo };
