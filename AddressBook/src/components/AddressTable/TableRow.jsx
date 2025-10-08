import  { useState } from "react";
import EditableCell from "./EditableCell";
import Button from "../common/Button.jsx";

 function TableRow({ book, isEditing, onEdit, onSave, onCancel }) {
    const [localData, setLocalData] = useState(book);

    const handleChange = (field, value) => {
        setLocalData({ ...localData, [field]: value });
    };

    const handleSave = () => {
        if (
            !localData.firstName.trim() ||
            !localData.lastName.trim() ||
            !localData.phone.trim()
        ) {
            alert("Fields cannot be empty!");
            return;
        }
        onSave(localData);
    };

    return (
        <tr>
            <td>{book.id}</td>

            <EditableCell
                isEditing={isEditing}
                value={localData.firstName}
                onChange={(v) => handleChange("firstName", v)}
            />

            <EditableCell
                isEditing={isEditing}
                value={localData.lastName}
                onChange={(v) => handleChange("lastName", v)}
            />

            <EditableCell
                isEditing={isEditing}
                value={localData.phone}
                onChange={(v) => handleChange("phone", v)}
            />

            <td>
                {isEditing ? (
                    <>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={onCancel}>Cancel</Button>
                    </>
                ) : (
                    <Button onClick={onEdit}>Edit</Button>
                )}
            </td>
        </tr>
    );
}

export default TableRow