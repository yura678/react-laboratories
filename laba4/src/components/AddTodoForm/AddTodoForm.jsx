import {useState} from "react";
import "./AddTodoForm.css";
import Input from "../common/Input/Input.jsx";
import Button from "../common/Button/Button.jsx";


function AddTodoForm({onAddTodo}) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newTodo = {
            todo: text,
            userId: 1,
            completed: false,
        };
        onAddTodo(newTodo);
        setText("");
    };
    let isDisabled = text === "";

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <Input className="todo-input" type="text" placeholder="Enter task..." value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <Button className="todo-add-btn" disabled={isDisabled} type="submit">Add</Button>
        </form>
    );
}

export default AddTodoForm
