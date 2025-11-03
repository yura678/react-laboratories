import {memo, useCallback, useState} from "react";
import "./TodoItem.css";
import Button from "../common/Button/Button.jsx";
import CheckBox from "../common/CheckBox/CheckBox.jsx";
import Typography from "../common/Typography/Typography.jsx";
import TextArea from "../common/TextArea/TextArea.jsx";

function TodoItem({todo, onDelete, onUpdate, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.todo);

    const handleSave = () => {
        const trimmed = editText.trim();
        if (!trimmed) return;
        onEdit(todo.id, trimmed);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave();
    };

    const onToggle = () => {
        onUpdate(todo.id, {completed: !todo.completed});
    };

    const onDeleteClick = () => onDelete(todo.id);


    const onStartEdit = () => {
        setEditText(todo.todo);
        setIsEditing(true);
    };

    const onCancelEdit = () => {
        setEditText(todo.todo);
        setIsEditing(false);
    };

    const onEditChange = (e) => setEditText(e.target.value);


    const checkboxId = `checkboxTodo-${todo.id}`;
    const textareaId = `textareaTodo-${todo.id}`;

    return (
        <li className={`todo ${todo.completed ? "completed" : ""}`}>
            <CheckBox id={checkboxId} className="todo-checkbox" checked={todo.completed} onChange={onToggle}/>
            {isEditing ? (
                <>
                    <TextArea
                        id={textareaId}
                        value={editText}
                        onChange={onEditChange}
                        onKeyDown={handleKeyDown}
                        className="edit-input"
                    />
                    <div className="buttons">
                        <Button className="todo-save-btn" onClick={handleSave} disabled={editText === ""}>Save</Button>
                        <Button className="todo-cancel-btn" onClick={onCancelEdit}>Cancel</Button>
                    </div>
                </>
            ) : (
                <>
                    <Typography variant="span" className="todo-text">
                        {todo.todo}
                    </Typography>
                    <div className="buttons">
                        <Button className="todo-edit-btn" onClick={onStartEdit}>Edit</Button>
                        <Button className="todo-delete-btn" onClick={onDeleteClick}>Delete</Button>
                    </div>
                </>
            )}
        </li>
    );
}

export default memo(TodoItem);
