import ActionTypes from "../actions/actionsTypes";
import { Action } from "../actions/todoListActions";

type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

type TaskType = {
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
  tasks: TaskType[];
};

type State = { error: boolean; loading: boolean; data: Todo[] };

const todoListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.START_LOADING_TODO_LIST: {
      return { ...state, loading: true };
    }

    case ActionTypes.LOAD_TODO_LIST: {
      return { ...state, error: false, loading: false, data: action.payload };
    }

    case ActionTypes.ERROR_IN_LOADING_TODO_LIST: {
      return { ...state, error: true, loading: false, data: [] };
    }
  }
};

export { State, Todo, TaskType };
export default todoListReducer;
