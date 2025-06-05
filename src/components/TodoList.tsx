import type { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;  
  onEdit: (id: number, newText: string) => void;
  onDeleteCompleted: () => void; 
}

// Renders a list of to-do items using the TodoItem component.
export default function TodoList({ todos, onToggle, onDelete, onEdit, onDeleteCompleted }: TodoListProps) {
  return (
    <>
      {todos.some(todo => todo.completed) && (
        <button className="clear-button" onClick={onDeleteCompleted}>Clear Completed Tasks</button>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </>
  );
}