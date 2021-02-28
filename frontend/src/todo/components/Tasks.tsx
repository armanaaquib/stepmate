import React from "react";

import Task from "./Task";
import StyledTasks, { TasksDivider } from "./style/Tasks.style";
import { TaskType } from "../context/reducers/todoListReducer";

type TasksProps = { entries: TaskType[] };

const Tasks = ({ entries }: TasksProps): React.ReactElement => {
  const unDoneTasks = entries.filter((task) => task.status !== "DONE");
  const doneTasks = entries.filter((task) => task.status === "DONE");

  return (
    <StyledTasks data-testid="tasks">
      {unDoneTasks.map((task) => (
        <Task key={task.id} entry={task} />
      ))}
      {doneTasks.length > 0 ? (
        <TasksDivider data-testid="tasks-divider" />
      ) : null}
      {doneTasks.map((task) => (
        <Task key={task.id} entry={task} />
      ))}
    </StyledTasks>
  );
};

export default Tasks;
