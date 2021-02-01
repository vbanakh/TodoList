import React from "react";
import style from "../filterButton/filterButton.module.scss";

export default function FilterButton(filterList) {
  const { isPressed, setFilter, name } = filterList.filterList.props;
 
  return (
    <button
      type="button"
      className={isPressed ? style.btnPressed : style.btn }
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
}
