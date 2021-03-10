import Task, { TaskRequest } from "./task";

type Todo = {
  id: number;
  title: string;
  createdAt: string;
  modifiedAt: string;
  userId: number;
  tasks: Task[];
};

type TodoRequest = {
  title: string;
  tasks: TaskRequest[];
};

export { TodoRequest };
export default Todo;
