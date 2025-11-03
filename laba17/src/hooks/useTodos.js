import {useEffect, useMemo, useState, useCallback} from "react";

export function useTodos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalTodos, setTotalTodos] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        let aborted = false;

        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const skip = (currentPage - 1) * limitPerPage;
                const res = await fetch(`https://dummyjson.com/todos?limit=${limitPerPage}&skip=${skip}`);
                const data = await res.json();
                if (aborted) return;
                setTodos(data.todos ?? []);
                setTotalTodos(data.total ?? 0);
            } catch (err) {
                if (!aborted) setError(err.message);
            } finally {
                if (!aborted) setIsLoading(false);
            }
        };

        fetchTodos();
        return () => { aborted = true; };
    }, [currentPage, limitPerPage]);

    const totalPages = useMemo(() => Math.ceil(totalTodos / limitPerPage) || 1, [totalTodos, limitPerPage]);

    const goToNextPage = useCallback(() => {
        setCurrentPage(prev => (prev * limitPerPage < totalTodos ? prev + 1 : prev));
    }, [limitPerPage, totalTodos]);

    const goToPrevPage = useCallback(() => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
    }, []);

    const goToPage = useCallback((page) => {
        setCurrentPage(prev => {
            const safe = Math.max(1, Math.min(page, totalPages));
            return prev === safe ? prev : safe;
        });
    }, [totalPages]);

    const setLimit = useCallback((limit) => {
        setLimitPerPage(limit);
        setCurrentPage(1);
    }, []);

    const addTodo = useCallback(async (todo) => {
        try {
            setIsLoading(true);
            const res = await fetch("https://dummyjson.com/todos/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(todo),
            });
            const newTodo = await res.json();
            setTodos(prev => [...prev, {...newTodo, id: Date.now()}]);
            setTotalTodos(prev => prev + 1);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const deleteTodo = useCallback(async (id) => {
        try {
            setIsLoading(true);
            await fetch(`https://dummyjson.com/todos/${id}`, { method: "DELETE" });
            setTodos(prev => prev.filter(t => t.id !== id));
            setTotalTodos(prev => Math.max(0, prev - 1));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const toggleTodo = useCallback(async (id, updatedFields) => {
        try {
            setIsLoading(true);
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updatedFields),
            });
            setTodos(prev => prev.map(t => (t.id === id ? {...t, ...updatedFields} : t)));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const editTodo = useCallback(async (id, newTitle) => {
        try {
            setIsLoading(true);
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({todo: newTitle}),
            });
            setTodos(prev => prev.map(t => (t.id === id ? {...t, todo: newTitle} : t)));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const filteredTodos = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return todos;
        return todos.filter(t => t.todo.toLowerCase().includes(q));
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
        setSearchTerm,
    };
}
