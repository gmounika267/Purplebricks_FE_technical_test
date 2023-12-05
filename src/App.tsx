import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: string, updatedTask: ITask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };


  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} updateTask={updateTask} editTask={editTask} setEditTask={setEditTask} />
      <TaskList toggleComplete={toggleComplete} tasks={tasks} deleteTask={deleteTask} setEditTask={setEditTask} />
    </div>
  );
}

export default App;
