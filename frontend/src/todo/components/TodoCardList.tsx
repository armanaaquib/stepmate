import React from "react";

import TodoCard from "./TodoCard";
import StyledTodoCardList from "./style/TodoCardList.style";

const TodoCardList = (): React.ReactElement => {
  return (
    <StyledTodoCardList data-testid="todo-list">
      <TodoCard />
    </StyledTodoCardList>
  );
};

export default TodoCardList;
