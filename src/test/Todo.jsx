import { useState, useEffect } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: "350px", margin: "40px auto", textAlign: "center" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "8px", width: "70%" }}
      />

      <button onClick={addTask} className="btn btn-primary mx-3">
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              background: "#f0f0f0",
              padding: "8px 12px",
              borderRadius: "4px",
            }}
          >
            {item}

            <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
