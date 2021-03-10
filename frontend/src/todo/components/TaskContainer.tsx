import React from "react";

import Task from "../context/types/task";
import StyledTask from "./style/Task.style";

type TaskProps = { entry: Task };

const TaskContainer = ({ entry }: TaskProps): React.ReactElement => {
  return <StyledTask status={entry.status}>{entry.text}</StyledTask>;
};

export default TaskContainer;
