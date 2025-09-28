import {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (text.trim() === "") {
            return;
        }

        setTodos([...todos, {id: Date.now(), text}]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-list">
            <AddTodoForm onAddTodo={addTodo}/>
            <ul className="todo-items">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} task={todo} onDelete={deleteTodo}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList
