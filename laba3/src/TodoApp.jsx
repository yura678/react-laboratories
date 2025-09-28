import './TodoApp.css'
import TodoList from "./components/TodoList.jsx";

function TodoApp() {

  return (
    <div className="app">
        <h1>To-Do List</h1>
        <TodoList />
    </div>
  )
}

export default TodoApp
