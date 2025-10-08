import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function AddressTable({ books, onUpdate }) {
    const [editingId, setEditingId] = useState(null);

    if (books.length === 0) return <p>No data to display.</p>;

    const handleEdit = (book) => {
        setEditingId(book.id);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleSave = (updatedBook) => {
        onUpdate(updatedBook);
        handleCancel();
    };

    return (
        <table border="1" cellPadding="8" width="100%">
            <TableHeader />
            <tbody>
            {books.map((b) => (
                <TableRow
                    key={b.id}
                    book={b}
                    isEditing={editingId === b.id}
                    onEdit={() => handleEdit(b)}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ))}
            </tbody>
        </table>
    );
}
