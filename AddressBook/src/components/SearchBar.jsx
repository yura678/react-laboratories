import Input from "./common/Input.jsx";

function SearchBar({searchTerm, onSearch}) {
    return (
        <div>
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}
export default SearchBar