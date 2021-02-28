import ActionTypes from "./actionsTypes";
import { Todo } from "../reducers/todoListReducer";
import { getTodoList } from "../actions/todoListApi";

type Action =
  | { type: ActionTypes.START_LOADING_TODO_LIST }
  | { type: ActionTypes.LOAD_TODO_LIST; payload: Todo[] }
  | { type: ActionTypes.ERROR_IN_LOADING_TODO_LIST };

const todoListActions = (
  dispatch: React.Dispatch<Action>
): Record<string, () => Promise<void>> => {
  return {
    loadTodoList: () => {
      dispatch({ type: ActionTypes.START_LOADING_TODO_LIST });
      return getTodoList()
        .then((todoList) => {
          dispatch({ type: ActionTypes.LOAD_TODO_LIST, payload: todoList });
        })
        .catch(() => {
          dispatch({ type: ActionTypes.ERROR_IN_LOADING_TODO_LIST });
        });
    },
  };
};

export { Action };
export default todoListActions;
