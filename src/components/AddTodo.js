import React, { useState } from "react";

export default function AddTodo({addTodo}) {
  const [newItem, setNewItem] = useState({ title: "" });

  const addItemInput = (e) =>
    setNewItem({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem.title);
    setNewItem({ title: "" });
  };
  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add todo..."
        style={{ flex: "10", padding: "5px" }}
        onChange={addItemInput}
        value={newItem.title}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
}
