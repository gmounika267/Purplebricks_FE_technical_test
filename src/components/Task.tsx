import React from "react";
import { ITask } from "../types";

interface ITaskProps {
  task: ITask;
  deleteTask: (id: string) => void;
  setEditTask: (task: ITask) => void;
  toggleComplete: (id: string) => void;
}

const Task: React.FC<ITaskProps> = ({
  task,
  deleteTask,
  setEditTask,
  toggleComplete,
}) => {
  return (
    <div className="task-item">
      <h3
        className="task-title"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </h3>
      <p className="task-description">{task.description}</p>
      <div className="task-buttons">
        <button
          className="button edit-button"
          onClick={() => setEditTask(task)}
        >
          Edit
        </button>
        <button
          className="button delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="button complete-button"
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
};

export default Task;
