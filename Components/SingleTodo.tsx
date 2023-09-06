import React from "react";
import style from "./css/Todo.module.css";
import Todo from "@/types/Todo";
import { completeTodo, removeTodoFromCache } from "@/utils/TodosServices";
import { updateTodosList } from "./TodosList";

function SingleTodo({ todo }: { todo: Todo }) {
  return (
    <div className={style.todo + (todo.done ? ` `+style.todocomplete : ``)} draggable
    onClick={()=>{
      if (todo.done) {
        removeTodoFromCache(todo.id);
      }else{
        completeTodo(todo.id);
      }

      updateTodosList();
    }}>
      <p>{todo.text}</p>
    </div>
  );
}

export default SingleTodo;
