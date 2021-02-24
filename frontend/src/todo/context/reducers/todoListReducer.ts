import ActionTypes from "../actions/actionsTypes";
import { Action } from "../actions/todoListActions";

type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

type Task = {
  id: number;
  text: string;
  status: TaskStatus;
  createdAt: string;
  modifiedAt: string;
};

type Todo = {
  id: number;
  title: string;
  createdAt: string;
  modifiedAt: string;
  userId: number;
  tasks: Task[];
};

type State = { error: boolean; data: Todo[] };

const todoListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOAD_TODO_LIST: {
      return { ...state, data: action.payload };
    }
  }
};

export { State, Todo };
export default todoListReducer;
