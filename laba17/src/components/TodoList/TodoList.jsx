import "./TodoList.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm.jsx";
import Loader from "../common/Loader/Loader.jsx";
import {useTodos} from "../../hooks/useTodos.js";
import Paginator from "../Paginator/Paginator.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import TodoItems from "../TodoItems/TodoItems.jsx";

function TodoList() {
    const {
        todos,
        isLoading,
        error,
        deleteTodo,
        toggleTodo,
        addTodo,
        editTodo,
        currentPage,
        totalPages,
        limitPerPage,
        goToNextPage,
        goToPrevPage,
        goToPage,
        setLimit,
        searchTerm,
        setSearchTerm
    } = useTodos();

    return (
        <div className="todo-list">
            <AddTodoForm onAddTodo={addTodo}/>

            <SearchBar
                id="search"
                searchTerm={searchTerm}
                className="search-input"
                onSearch={setSearchTerm}
            />

            {error && <div>{error}</div>}
            {isLoading && <div><Loader/></div>}

            <TodoItems
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}/>

            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={goToNextPage}
                onPrevPage={goToPrevPage}
                limitPerPage={limitPerPage}
                onGoToPage={goToPage}
                onSetLimit={setLimit}
            />
        </div>
    );
}

export default TodoList;
