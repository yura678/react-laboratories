import { useState } from 'react'
import Typography from "./common/Typography.jsx";
import AddressForm from "./AddressForm.jsx";
import SearchBar from "./SearchBar.jsx";
import AddressTable from "./AddressTable/AddressTable.jsx";

function Container() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const addBook = (book) => {
        setBooks([...books, { ...book, id: Date.now()}]);
    };
    const updateBook = (updatedBook) => {
        setBooks(books.map(b => b.id === updatedBook.id ? updatedBook : b));
    };

    const filteredBooks = books.filter(
        b =>
            b.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.phone.includes(searchTerm)
    );
    return (
        <div>
            <Typography variant="h1">Address Book</Typography>
            <AddressForm onAdd={addBook} />
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <AddressTable books={filteredBooks} onUpdate={updateBook} />
        </div>
    )
}

export default Container
