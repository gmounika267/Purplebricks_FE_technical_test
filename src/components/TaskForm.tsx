import React, { useState, useEffect } from "react";
import { ITask } from "../types";

interface ITaskFormProps {
  addTask: (task: ITask) => void;
  editTask?: ITask | null;
  setEditTask: (task: ITask | null) => void;
  updateTask: (id: string, updatedTask: ITask) => void;
}

const TaskForm: React.FC<ITaskFormProps> = ({
  addTask,
  editTask,
  setEditTask,
  updateTask,
}) => {
  const [task, setTask] = useState<ITask>({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task.id, task);
      setEditTask(null);
    } else {
      addTask({ ...task, id: Date.now().toString() });
    }
    setTask({ id: "", title: "", description: "", completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Title"
        className="form-input"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        className="form-textarea"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button className="form-button" type="submit">
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
