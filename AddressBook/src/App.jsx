import { useState } from 'react'
import './App.css'
import AddressTable from './components/AddressTable/AddressTable.jsx'
import SearchBar from './components/SearchBar.jsx'
import AddressForm from "./components/AddressForm.jsx";
import Typography from "./components/common/Typography.jsx";

function App() {
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

export default App
