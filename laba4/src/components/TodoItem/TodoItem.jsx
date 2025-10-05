import "./TodoItem.css";
import Button from "../common/Button/Button.jsx";
import CheckBox from "../common/CheckBox/CheckBox.jsx";

function TodoItem({ todo, onDelete, onUpdate }) {

    return (
        <div className="todo-item">
            <li className={`todo ${todo.completed ? "completed" : ""}`}>
                <CheckBox className="todo-checkbox" checked={todo.completed} onChange={() => onUpdate(todo.id, {completed: !todo.completed})} ></CheckBox>
                <span className="todo-text">
                    {todo.todo}
                </span>
                <Button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>Delete</Button>
            </li>
        </div>
    );
}

export default TodoItem
