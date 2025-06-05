import { useState } from "react";
import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}


//  Represents a single to-do item.
//  Allows toggling its completion status and deleting the item.
export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>  
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave}>💾</button>
          <button onClick={handleCancel}>❌</button>
        </>
              ) : (
        <>
          <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button className="delete-button" onClick={() => onDelete(todo.id)}>🗑️</button>
        </>
      )} 
    </li>
  );
}