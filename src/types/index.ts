export interface ITask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export interface ITaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface ITaskListProps {
  tasks: ITask[];
}

export interface ITaskProps {
  task: ITask;
  updateTask: (id: string, updatedTask: ITask) => void;
  deleteTask: (id: string) => void;
}
