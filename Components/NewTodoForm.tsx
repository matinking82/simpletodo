"use client";

import React from "react";
import style from "./css/NewTodoForm.module.css";
import { addTodoToCache } from "@/utils/TodosServices";
import { updateTodosList } from "./TodosList";

function NewTodoForm() {
  let [text, setText] = React.useState("");
  return (
    <div className={style.newtodoform}>
      <input
        value={text}
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text == "") return;
          addTodoToCache(text);
          updateTodosList();
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default NewTodoForm;
