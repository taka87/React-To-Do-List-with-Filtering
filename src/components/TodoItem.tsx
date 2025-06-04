import React from "react";
import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}


//  Represents a single to-do item.
//  Allows toggling its completion status and deleting the item.
export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        🗑️
      </button>
    </li>
  );
}