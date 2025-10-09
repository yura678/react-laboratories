import "./TodoList.css";
import AddTodoForm from "../AddTodoForm/AddTodoForm.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import Loader from "../common/Loader/Loader.jsx";
import {useTodos} from "../../hooks/useTodos.js";
import Input from "../common/Input/Input.jsx";
import Paginator from "../Paginator/Paginator.jsx";
import Typography from "../common/Typography/Typography.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";


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

    let errorMessage = error && (<div>{error}</div>);
    return (
        <div className="todo-list">
            <AddTodoForm onAddTodo={addTodo}/>
            <SearchBar id="search"
                       searchTerm={searchTerm}
                       className="search-input"
                       onSearch={setSearchTerm}/>
            {errorMessage}
            <ul className="todo-items">
                {isLoading ? <Loader/>
                    : (todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={toggleTodo}
                                  onEdit={editTodo}/>
                    )))}
            </ul>
            <Paginator currentPage={currentPage}
                       totalPages={totalPages}
                       onNextPage={goToNextPage}
                       onPrevPage={goToPrevPage}
                       limitPerPage={limitPerPage}
                       onGoToPage={goToPage}
                       onSetLimit={setLimit}/>
        </div>
    );
}

export default TodoList