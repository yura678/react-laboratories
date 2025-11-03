import {memo} from "react";
import Input from "../common/Input/Input.jsx";

function SearchBar({searchTerm, onSearch, placeholder = "Search...", ...props}) {
    const handleChange = (e) => onSearch(e.target.value);

    return (
        <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
            {...props}
        />
    );
}

export default memo(SearchBar);
