import React from "react";
import style from "../clearButton/clearButton.module.scss";

export default function ClearButton({ clear, todos }) {
  return (
    <button
      type="button"
      className={
        todos.some((todo) => todo.completed) ? style.btnClear : style.btnHidden
      }
      onClick={() => clear.clear()}
    >
      <span> Delete completed tasks </span>
    </button>
  );
}
