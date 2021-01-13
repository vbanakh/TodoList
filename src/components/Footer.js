import React from "react";

export default function Footer ({ todoAll, todoActive, todoCompleted, clear})  {
    return (
        <div>
          <button onClick={todoAll}>All</button>
          <button onClick={todoActive}>Active</button>
          <button onClick={todoCompleted}>Completed</button>
          <button onClick={clear}>Clear completed</button>
        </div>
      );
}