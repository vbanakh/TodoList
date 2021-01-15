import React from "react";

export default function FilterButton(filterList) {
  const { isPressed, setFilter, name } = filterList.filterList.props;

  return (
    <button
      type="button"
      className="btn btn-secondary"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
}
