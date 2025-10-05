import "./TodoList.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import Loader from "../common/Loader/Loader.jsx";
import {useTodos} from "../../hooks/useTodos.js";


function TodoList() {
    const {todos, isLoading, error, deleteTodo, toggleTodo, addTodo} = useTodos();

    let errorMessage = error && (<div>{error}</div>);
    return (
        <div className="todo-list">
            <AddTodoForm onAddTodo={addTodo}/>
            {errorMessage}
            <ul className="todo-items">
                {isLoading ? <Loader/>
                    : (todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={toggleTodo}/>
                    )))}
            </ul>
        </div>
    );
}

export default TodoList