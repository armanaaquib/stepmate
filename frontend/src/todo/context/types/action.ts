import ActionTypes from "./actionsTypes";
import Todo from "./todo";

type Action =
  | { type: ActionTypes.START_LOADING }
  | { type: ActionTypes.STOP_LOADING }
  | { type: ActionTypes.LOAD_TODO_LIST; payload: Todo[] }
  | { type: ActionTypes.ERROR_IN_LOADING_TODO_LIST }
  | { type: ActionTypes.ADD_TODO; payload: Todo };

export default Action;
