# React To-Do List with Filtering

A simple React + TypeScript ToDo application built with Vite. This app demonstrates basic CRUD functionality with state management using React hooks, filtering, and modular components.

## 📝 Coding Highlights
- Functional components with typed props for clarity
- Separation of concerns: individual components for input, list, item, and filters
- Inline comments in code for easy understanding
- CSS class names and styles organized in index.css for maintainability

## 🛠 Tech Stack
- React - UI Library for building user interfaces
- TypeScript - Type-safe JavaScript for better development experience
- Vite - Modern build tool and development server, faster than CRA
- React Hooks - For state and side-effect management (useState)

## ⚙️ Features

- Add new todos with an input form
- Toggle completion status by clicking the todo text
- Delete todos using a delete button
- Filter todos by All, Active, and Completed
- Clear visual indication of completed tasks (strike-through text)
- Responsive and clean UI with CSS modularization

---

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/taka87/React-To-Do-List-with-Filtering
cd React-To-Do-List-with-Filtering # or the folder name you chose when cloning
    Note: If you renamed the folder while cloning, replace the path accordingly.

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm run dev

4. Open your browser at http://localhost:5173/ to see the app in action. 
    Note: The local development server address may vary. Please check your terminal 
    output to confirm the correct localhost URL.

🧱 Project Structure
The project is organized in a simple way suitable for small apps and MVPs:

src/
├── components/
│   ├── TodoInput.tsx      # Input form for adding new todos
│   ├── TodoList.tsx       # List rendering of todos, delegates to TodoItem
│   ├── TodoItem.tsx       # Single todo item with toggle and delete actions
│   └── FilterButtons.tsx  # Filter buttons to show all, active, or completed todos
├── App.tsx                # Main application logic and state management
├── App.css                # Global styles
└── main.tsx               # Entry point (ReactDOM rendering)
p.s.
Note: For larger and more complex projects, consider:
Using custom hooks to separate logic (hooks/ folder)
Centralized state management (Redux, Zustand, Recoil, or Context API)
Feature-based module structure
Routing with react-router-dom for multiple pages