import { useState } from "react";
import "./App.css"; // Main global styles

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

// Type definition for a todo item
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Possible filter values
export type Filter = "all" | "active" | "completed";

function App() {
   // State to manage the list of todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Refactor code", completed: false },
  ]);
  // const [filter, setFilter] = useState<Filter>("all");

    // State to manage the current filter
  const [filter, setFilter] = useState<Filter>("all");

  // Adds a new todo item to the list
  const handleAddTodo = (text: string) => {
  const newTodo = {
      id: Date.now(), // unique ID based on timestamp
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Toggles the completed status of a todo item
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit a todo item 
  const handleEdit = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  //Clear Completed ToDo Tasks
  const handleClearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };


  // Deletes a todo item by its ID
  function handleDeleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  
  // Returns a filtered list of todos based on the current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <div className="app">
      <h1 className="app-title">Todo List with Filtering App</h1>

      {/* Input component to add new todos */}
      <TodoInput onAdd={handleAddTodo} />

      {/* List of todo items */}
      <TodoList todos={filteredTodos} 
      onToggle={handleToggleTodo} 
      onDelete={handleDeleteTodo} 
      onEdit={handleEdit}
      onDeleteCompleted={handleClearCompleted}
      />  

      {/* Buttons to filter the todos */}
      <FilterButtons setFilter={setFilter} />

    </div>
  );
}

export default App;