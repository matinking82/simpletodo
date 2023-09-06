import Todo from "@/types/Todo";
import { revalidatePath } from "next/cache";

export const getTodosFromCache = () => {
    if (typeof window === "undefined") return [];
    const todos = localStorage.getItem("todos");
    if (todos) {
        return JSON.parse(todos);
    }
    return [];
};

const getBiggestId = () => {
    const todos = getTodosFromCache();
    if (todos.length > 0) {
        return todos[todos.length - 1].id;
    }
    return 1;
}

export const addTodoToCache = (text: string) => {
    if (typeof window === "undefined") return;
    const todos = getTodosFromCache();
    const newTodo = {
        id: getBiggestId() + 1,
        text,
        done: false
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

export const removeTodoFromCache = (id: number) => {
    if (typeof window === "undefined") return;
    const todos = getTodosFromCache();
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

export const completeTodo = (id: number) => {
    if (typeof window === "undefined") return;
    const todos = getTodosFromCache();
    const updatedTodos = todos.map((todo: Todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}