import React from "react";
import Tasks from "./Tasks";

import StyledTodoCard, {
  TodoHeader,
  HeaderText,
  TodoBody,
} from "./style/TodoCard.style";
import Todo from "../context/types/todo";

type TodoCardProps = { entry: Todo };

const TodoCard = ({ entry }: TodoCardProps): React.ReactElement => (
  <StyledTodoCard>
    <TodoHeader>
      <HeaderText>{entry.title}</HeaderText>
    </TodoHeader>
    <TodoBody>
      <Tasks entries={entry.tasks} />
    </TodoBody>
  </StyledTodoCard>
);

export default TodoCard;
