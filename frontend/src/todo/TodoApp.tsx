import React, { ReactElement } from "react";

import TodoListProvider from "./context/TodoListProvider";
import TodoCardList from "./components/TodoCardList";

const TodoApp = (): ReactElement => (
  <TodoListProvider>
    <TodoCardList />
  </TodoListProvider>
);

export default TodoApp;
