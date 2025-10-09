import {useEffect, useMemo, useState} from "react";

export function useTodos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalTodos, setTotalTodos] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const skip = (currentPage - 1) * limitPerPage;
                const response = await fetch(`https://dummyjson.com/todos?limit=${limitPerPage}&skip=${skip}`);
                const data = await response.json();
                setTodos(data.todos);
                setTotalTodos(data.total);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTodos();
    }, [currentPage, limitPerPage]);

    const totalPages = Math.ceil(totalTodos / limitPerPage);


    const goToNextPage = () => {
        if (currentPage * limitPerPage < totalTodos) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const goToPage = (page) => {
        const pageNumber = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(pageNumber);
    };

    const setLimit = (limit) => {
        setLimitPerPage(limit);
        setCurrentPage(1);
    };

    const addTodo = async (todo) => {
        try {
            setIsLoading(true);
            const response = await fetch("https://dummyjson.com/todos/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(todo),
            });
            const newTodo = await response.json();
            setTodos((prevTodos) => [...prevTodos, {...newTodo, id: Date.now()}]);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteTodo = async (id) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "DELETE"
            });

            const deletedTodo = await response.json();
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    const toggleTodo = async (id, updatedFields) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updatedFields),
            });

            const updatedTodo = await response.json();
            setTodos((prevTodos) =>
                prevTodos.map(todo => todo.id === id ? {...todo, ...updatedFields} : todo)
            );

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const editTodo = async (id, newTitle) => {
        try {
            setIsLoading(true);
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({todo: newTitle})
            });
            setTodos(prevTodos =>
                prevTodos.map(todo => todo.id === id ? {...todo, todo: newTitle} : todo)
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredTodos = useMemo(() => {
        return todos.filter(todo =>
            todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

    return {
        todos: filteredTodos,
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
    };
}