import TodoItem from "../TodoItem/TodoItem.jsx";
import "./TodoItems.css";
function TodoItems({todos, deleteTodo, toggleTodo, editTodo}) {
    return (
        <ul className="todo-items">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={deleteTodo}
                    onUpdate={toggleTodo}
                    onEdit={editTodo}
                />
            ))}
        </ul>
    );
}

export default TodoItems;
