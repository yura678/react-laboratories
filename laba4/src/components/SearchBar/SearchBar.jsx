import Input from "../common/Input/Input.jsx";

function SearchBar({searchTerm, onSearch, placeholder ="Search...", ...props}) {
    return (
        <>
            <Input
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                {...props}
            />
        </>
    );
}
export default SearchBar