import React from "react";

export default function ClearButton({ clear, todos }) {
  return (
    <button
      type="button"
      className={
        todos.some((todo) => todo.completed) ? "btnClear" : "btnHidden"
      }
      onClick={() => clear.clear()}
    >
      <span> Delete completed tasks </span>
    </button>
  );
}
