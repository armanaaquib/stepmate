import Task from "./task";

type Todo = {
  id: number;
  title: string;
  createdAt: string;
  modifiedAt: string;
  userId: number;
  tasks: Task[];
};

export default Todo;
