import { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  
  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Escribe una nueva tarea..."
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}

export default AddTaskForm;
