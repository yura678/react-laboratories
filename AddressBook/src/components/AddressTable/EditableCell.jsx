import React from "react";
import Input from "../common/Input.jsx";

export default function EditableCell({isEditing, value, onChange}) {
    return (
        <td>
            {isEditing ? (
                <Input value={value} onChange={(e) => onChange(e.target.value)}/>
            ) : (value)}
        </td>
    );
}
