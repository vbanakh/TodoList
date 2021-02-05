import React from "react";
import style from "../todoItem/todoItem.module.scss";

export default function TodoItem({ todo, markItem, delItem }) {
  const { id, title, completed } = todo;

  return (
    <div  className={completed ? style.todoCompleted : style.todoActive}>
      <p>
        <input type="checkbox" onChange={markItem.bind(this, id)} checked={completed} className={style.checkbox}/> {title}
        <button className={style.btnDelete} onClick={delItem.bind(this, id)}>
          x
        </button>
      </p>
    </div>
  );
}

