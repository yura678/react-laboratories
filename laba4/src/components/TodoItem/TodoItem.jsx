import "./TodoItem.css";
import Button from "../common/Button/Button.jsx";
import CheckBox from "../common/CheckBox/CheckBox.jsx";
import {useState} from "react";
import Typography from "../common/Typography/Typography.jsx";
import TextArea from "../common/TextArea/TextArea.jsx";

function TodoItem({todo, onDelete, onUpdate, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.todo);

    const handleSave = () => {
        if (!editText.trim()) return;
        onEdit(todo.id, editText);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    const checkboxId = `checkboxTodo-${todo.id}`;
    const textareaId = `textareaTodo-${todo.id}`;
    return (
        <>
            <li className={`todo ${todo.completed ? "completed" : ""}`}>
                <CheckBox id={checkboxId} className="todo-checkbox" checked={todo.completed}
                          onChange={() => onUpdate(todo.id, {completed: !todo.completed})}></CheckBox>
                {isEditing ? (
                    <>
                        <TextArea
                            id={textareaId}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="edit-input"/>
                        <div className="buttons">
                            <Button className="todo-save-btn" onClick={handleSave}>Save</Button>
                            <Button className="todo-cancel-btn" onClick={() => setIsEditing(false)}>Cancel</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Typography variant="span" className="todo-text">
                            {todo.todo}
                        </Typography>
                        <div className="buttons">
                            <Button className="todo-edit-btn" onClick={() => setIsEditing(true)}>Edit</Button>
                            <Button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>Delete</Button>
                        </div>

                    </>
                )}
            </li>
        </>
    );
}

export default TodoItem
