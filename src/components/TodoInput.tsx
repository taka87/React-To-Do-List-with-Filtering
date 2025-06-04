import { useState } from "react";
import type { FormEvent } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

// Input form component to add new to-do items.
function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText(""); // Clear the input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new ToDo task"
        className="todo-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default TodoInput;