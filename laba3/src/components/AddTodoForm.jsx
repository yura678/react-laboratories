import { useState } from "react";
import "../styles/AddTodoForm.css";

function AddTodoForm({ onAddTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddTodo(text);
        setText("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Enter task..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button className="todo-add-btn" type="submit">
                Add
            </button>
        </form>
    );
}

export default AddTodoForm
