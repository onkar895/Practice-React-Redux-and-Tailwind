import React, { useState } from 'react'

const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={{ ...styles.taskItem, textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span style={{ color: 'black', fontWeight: 'bold' }} onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList


const styles = {
  container: {
    maxWidth: '600px',
    margin: '10rem auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    margin: '15px auto',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  taskList: {
    listStyleType: 'none',
    padding: 0,
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};