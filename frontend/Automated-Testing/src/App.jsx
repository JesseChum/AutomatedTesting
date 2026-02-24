import { useState } from "react";
import TodoForm from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title) => {
    setTodos([...todos, title]);
  };

  return (
    <>
      <TodoForm onAdd={handleAdd} />
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}