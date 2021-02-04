import React from "react";
import style from "../filterButton/filterButton.module.scss";

export default function FilterButton(filterList) {
  return filterList.filterList.map((item) => (
    <button
      key={item.key}
      type="button"
      className={item.props.isPressed ? style.btnPressed : style.btn}
      aria-pressed={item.props.isPressed}
      onClick={() => item.props.setFilter(item.props.name)}
    >
      <span>{item.props.name}</span>
    </button>
  ));
}
