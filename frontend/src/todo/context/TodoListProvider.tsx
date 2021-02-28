import React, {
  createContext,
  ReactElement,
  ReactNode,
  Reducer,
  useReducer,
} from "react";

import todoListReducer, { State } from "./reducers/todoListReducer";
import todoListActions, { Action } from "./actions/todoListActions";

type ContextType = {
  state: State;
  actions: Record<string, () => Promise<void>>;
};

type TodoListProviderProps = {
  children: ReactNode;
};

const initialState = { error: false, loading: false, data: [] };

const TodoListContext = createContext<ContextType>({
  state: initialState,
  actions: {},
});

const TodoAppProvider = ({ children }: TodoListProviderProps): ReactElement => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    todoListReducer,
    initialState
  );
  const actions = todoListActions(dispatch);

  return (
    <TodoListContext.Provider value={{ state, actions }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext };
export default TodoAppProvider;
