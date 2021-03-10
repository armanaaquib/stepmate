import { addTodo, getTodoList } from "./todoService";
import ActionTypes from "../types/actionsTypes";
import Action from "../types/action";
import { TodoRequest } from "../types/todo";
import Actions from "../types/actions";

const todoListActions = (dispatch: React.Dispatch<Action>): Actions => {
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

    addTodo: (todoRequest: TodoRequest) => {
      dispatch({ type: ActionTypes.START_LOADING });
      return addTodo(todoRequest)
        .then((todo) => {
          dispatch({ type: ActionTypes.ADD_TODO, payload: todo });
          dispatch({ type: ActionTypes.STOP_LOADING });
        })
        .catch(() => {
          dispatch({ type: ActionTypes.STOP_LOADING });
        });
    },
  };
};

export default todoListActions;
