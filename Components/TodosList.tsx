"use client";

import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import { getTodosFromCache } from "@/utils/TodosServices";

let setData: any = null;
export const updateTodosList = () => {
    setData(getTodosFromCache());
};

function TodosList() {
  let data;
  [data, setData] = useState([]);

  useEffect(() => {
    setData(getTodosFromCache());
  }, []);

  return (
    <div>
      {data.map((todo: any) => {
        return <SingleTodo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodosList;
