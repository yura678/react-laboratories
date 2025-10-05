import {useEffect, useState} from "react";

export function useTodos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                setTodos(data.todos);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTodos();
    }, []);

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


    return {todos, isLoading, error, deleteTodo, toggleTodo, addTodo};
}