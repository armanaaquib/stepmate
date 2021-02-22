import React from "react";
import Tasks from "./Tasks";

import StyledTodoCard, {
  TodoHeader,
  HeaderText,
  TodoBody,
} from "./style/TodoCard.style";

const TodoCard = (): React.ReactElement => (
  <StyledTodoCard>
    <TodoHeader>
      <HeaderText></HeaderText>
    </TodoHeader>
    <TodoBody>
      <Tasks />
    </TodoBody>
  </StyledTodoCard>
);

export default TodoCard;
