import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button  onClick={() => deleteTask(task.id)}>Eliminar</button>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
    </div>
  );
}

export default Task;
