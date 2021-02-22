import React, { ReactElement } from "react";

import TodoCardList from "./components/TodoCardList";

const TodoApp = (): ReactElement => (
  <div data-tesid="todo-app">
    <TodoCardList />
  </div>
);

export default TodoApp;
