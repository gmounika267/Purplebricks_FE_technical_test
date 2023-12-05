import React from "react";
import { ITask } from "../types";
import Task from "./Task";

interface ITaskListProps {
  tasks: ITask[];
  deleteTask: (id: string) => void;
  setEditTask: (task: ITask) => void;
  toggleComplete: (id: string) => void;
}

const TaskList: React.FC<ITaskListProps> = ({
  tasks,
  deleteTask,
  setEditTask,
  toggleComplete,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          toggleComplete={toggleComplete}
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
