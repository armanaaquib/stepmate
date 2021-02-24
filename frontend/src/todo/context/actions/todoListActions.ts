import ActionTypes from "./actionsTypes";
import { Todo } from "../reducers/todoListReducer";
import { getTodoList } from "../actions/todoListApi";

type Action = { type: ActionTypes.LOAD_TODO_LIST; payload: Todo[] };

const todoListActions = (
  dispatch: React.Dispatch<Action>
): Record<string, () => void> => {
  return {
    loadTodoList: () => {
      return getTodoList().then((todoList) => {
        dispatch({ type: ActionTypes.LOAD_TODO_LIST, payload: todoList });
      });
    },
  };
};

export { Action };
export default todoListActions;
