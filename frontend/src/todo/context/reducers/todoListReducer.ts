import State from "../types/state";
import Action from "../types/action";
import ActionTypes from "../types/actionsTypes";

const todoListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.START_LOADING: {
      return { ...state, loading: true };
    }

    case ActionTypes.STOP_LOADING: {
      return { ...state, loading: false };
    }

    case ActionTypes.LOAD_TODO_LIST: {
      return { ...state, error: false, data: action.payload };
    }

    case ActionTypes.ERROR_IN_LOADING_TODO_LIST: {
      return { ...state, error: true, data: [] };
    }

    case ActionTypes.ADD_TODO: {
      return { ...state, data: [action.payload, ...state.data] };
    }
  }
};

export default todoListReducer;
