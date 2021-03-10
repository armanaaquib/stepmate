import React from "react";

import TaskContainer from "./TaskContainer";
import StyledTasks, { TasksDivider } from "./style/Tasks.style";
import Task from "../context/types/task";

type TasksProps = { entries: Task[] };

const Tasks = ({ entries }: TasksProps): React.ReactElement => {
  const unDoneTasks = entries.filter((task) => task.status !== "DONE");
  const doneTasks = entries.filter((task) => task.status === "DONE");

  return (
    <StyledTasks data-testid="tasks">
      {unDoneTasks.map((task) => (
        <TaskContainer key={task.id} entry={task} />
      ))}
      {doneTasks.length > 0 ? (
        <TasksDivider data-testid="tasks-divider" />
      ) : null}
      {doneTasks.map((task) => (
        <TaskContainer key={task.id} entry={task} />
      ))}
    </StyledTasks>
  );
};

export default Tasks;
