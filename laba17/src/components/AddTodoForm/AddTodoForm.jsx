import {memo, useState} from "react";
import "./AddTodoForm.css";
import Input from "../common/Input/Input.jsx";
import Button from "../common/Button/Button.jsx";

function AddTodoForm({onAddTodo}) {
    const [text, setText] = useState("");

    const handleSubmit = ((e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        const newTodo = { todo: trimmed, userId: 1, completed: false };
        onAddTodo(newTodo);
        setText("");
    });

    const onChange = (e) => setText(e.target.value);

    const isDisabled = text === "";

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <Input
                id="addTodo"
                className="todo-input"
                placeholder="Enter todo..."
                value={text}
                onChange={onChange}
            />
            <Button className="todo-add-btn" disabled={isDisabled} type="submit">
                Add
            </Button>
        </form>
    );
}

export default memo(AddTodoForm);
