import React from "react";

import Task from "./Task";
import StyledTasks, { TasksDivider } from "./style/Tasks.style";

const Tasks = (): React.ReactElement => {
  return (
    <StyledTasks>
      <Task />
      <TasksDivider />
      <Task />
    </StyledTasks>
  );
};

export default Tasks;
