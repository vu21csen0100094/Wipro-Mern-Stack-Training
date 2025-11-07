import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  // Delete a task by its index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="title">To Do List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {todos.length === 0 ? (
          <li className="empty-text">No tasks yet...</li>
        ) : (
          todos.map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
