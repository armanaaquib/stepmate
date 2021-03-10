type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

type Task = {
  id: number;
  text: string;
  status: TaskStatus;
  createdAt: string;
  modifiedAt: string;
};

type TaskRequest = {
  text: string;
};

export { TaskRequest };
export default Task;
