import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'not-done') {
      return !task.isDone;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not-done')}>Not Done</button>
      </div>
      <ListTask
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
