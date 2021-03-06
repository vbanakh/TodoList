import React from "react";

export default function TodoItem({ todo, markItem, delItem }) {
  const getStyle = () => {
    return {
      borderBottom: "1px dotted #ccc",
      padding: "10px",
      background: "#f4f4f4",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  const { id, title, completed } = todo;

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={markItem.bind(this, id)} checked={completed} /> {title}
        <button style={btnStyle} onClick={delItem.bind(this, id)}>
          x
        </button>
      </p>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "red",
  color: "white",
  borderRadius: "50%",
  cursor: "pointer",
  border: "none",
  padding: "5px 10px",
  float: "right",
};