import React, { useState } from "react";
import style from "../addTodo/addTodo.module.scss";

export default function AddTodo({ addTodo }) {
  const [newItem, setNewItem] = useState({ title: "" });

  const addItemInput = (e) => setNewItem({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem.title);
    setNewItem({ title: "" });
  };
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <input
        type="text"
        name="title"
        placeholder="Add todo..."
        className={style.input}
        onChange={addItemInput}
        value={newItem.title}
      />
      <input type="submit" value="Submit" className={style.addBtn} />
    </form>
  );
}
