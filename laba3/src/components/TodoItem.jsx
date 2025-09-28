import { useState } from "react";
import "../styles/TodoItem.css";

function TodoItem({ task, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="todo-item">
            <li className={`todo ${isCompleted ? "completed" : ""}`}>
                <input className="todo-checkbox" type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}/>
                <span className="todo-text">
                    {task.text}
                </span>
                <button className="todo-delete-btn" onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </li>
        </div>
    );
}

export default TodoItem
