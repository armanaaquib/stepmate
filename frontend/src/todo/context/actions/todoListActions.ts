import ActionTypes from "./actionsTypes";
import { Todo } from "../reducers/todoListReducer";
import { getTodoList } from "../actions/todoListApi";

type Action =
  | { type: ActionTypes.START_LOADING }
  | { type: ActionTypes.STOP_LOADING }
  | { type: ActionTypes.LOAD_TODO_LIST; payload: Todo[] }
  | { type: ActionTypes.ERROR_IN_LOADING_TODO_LIST };

const todoListActions = (
  dispatch: React.Dispatch<Action>
): Record<string, () => Promise<void>> => {
  return {
    loadTodoList: () => {
      dispatch({ type: ActionTypes.START_LOADING });
      return getTodoList()
        .then((todoList) => {
          dispatch({ type: ActionTypes.LOAD_TODO_LIST, payload: todoList });
          dispatch({ type: ActionTypes.STOP_LOADING });
        })
        .catch(() => {
          dispatch({ type: ActionTypes.ERROR_IN_LOADING_TODO_LIST });
          dispatch({ type: ActionTypes.STOP_LOADING });
        });
    },
  };
};

export { Action };
export default todoListActions;
