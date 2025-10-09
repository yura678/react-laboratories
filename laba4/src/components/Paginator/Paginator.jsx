import Button from "../common/Button/Button.jsx";
import Typography from "../common/Typography/Typography.jsx";
import {useState} from "react";
import Input from "../common/Input/Input.jsx";
import "./Paginator.css"
import Select from "../common/Select/Select.jsx";

function Paginator({currentPage, totalPages, onNextPage, onPrevPage, limitPerPage, onSetLimit, onGoToPage, ...props}) {
    const [pageInput, setPageInput] = useState("");

    const handlePageSubmit = (e) => {
        e.preventDefault();
        const pageNumber = parseInt(pageInput);

        if (pageNumber && pageNumber >= 1 && pageNumber <= totalPages) {
            onGoToPage(pageNumber);
            setPageInput("");
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setPageInput(value);
    };

    return (
        <div className="paginator"{...props}>
            <div className="paginator_navigation">
                <Button className="paginator_button" onClick={onPrevPage} disabled={currentPage === 1}>
                    Previous
                </Button>
                <Typography variant="span" className="paginator_info">
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button className="paginator_button" onClick={onNextPage} disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
            <div className="paginator_actions">
                <div className="paginator_perPage">
                    <Typography variant="label" className="paginator_label" htmlFor="limit">
                        Per Page:
                    </Typography>
                    <Select id="limit"
                            className="paginator_select"
                            value={limitPerPage}
                            onChange={(e) => onSetLimit(Number(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </Select>
                </div>
                <form className="paginator_form" onSubmit={handlePageSubmit}>
                    <Typography variant="label" className="paginator_label" htmlFor="page">
                        Go to:
                    </Typography>
                    <Input
                        id="page"
                        className="paginator_input"
                        value={pageInput}
                        onChange={handleInputChange}
                        placeholder="Page"/>
                    <Button className="paginator_button" type="submit" disabled={pageInput === ""}>
                        Go
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Paginator