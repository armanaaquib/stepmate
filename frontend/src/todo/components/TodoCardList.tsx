import React, { useContext, useEffect } from "react";

import TodoCard from "./TodoCard";
import StyledTodoCardList from "./style/TodoCardList.style";
import { TodoListContext } from "../context/TodoListProvider";

const TodoCardList = (): React.ReactElement => {
  const {
    state: { error, data },
    actions,
  } = useContext(TodoListContext);

  useEffect(() => {
    actions.loadTodoList();
  }, []);

  if (error) {
    return <div>Error in loading todo cards, Please refreseh the page</div>;
  }

  return (
    <StyledTodoCardList data-testid="todo-list">
      {data.map((todo) => (
        <TodoCard key={todo.id} entry={todo} />
      ))}
    </StyledTodoCardList>
  );
};

export default TodoCardList;
