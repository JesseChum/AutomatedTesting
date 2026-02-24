import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        data-testid="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onAdd(title)}>Add</button>
    </>
  );
}