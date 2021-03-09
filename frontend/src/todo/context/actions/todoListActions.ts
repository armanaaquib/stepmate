import { getTodoList } from "../actions/todoListApi";
import ActionTypes from "../types/actionsTypes";
import Action from "../types/action";

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

export default todoListActions;
