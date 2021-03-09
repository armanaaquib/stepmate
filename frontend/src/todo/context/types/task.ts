type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

type Task = {
  id: number;
  text: string;
  status: TaskStatus;
  createdAt: string;
  modifiedAt: string;
};

export default Task;
