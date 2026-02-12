import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="card">
        <div className="header">
          <h1>Task Manager</h1>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className="task-item">
              <span
                className={t.completed ? "completed" : ""}
                onClick={() => toggleTask(index)}
              >
                {t.text}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
