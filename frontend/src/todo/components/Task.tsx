import React from "react";

import { TaskType } from "../context/reducers/todoListReducer";
import StyledTask from "./style/Task.style";

type TaskProps = { entry: TaskType };

const Task = ({ entry }: TaskProps): React.ReactElement => {
  return <StyledTask status={entry.status}>{entry.text}</StyledTask>;
};

export default Task;
