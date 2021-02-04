import React from "react";
import Todoitem from "./TodoItem";

export default function Todos({ markTodo, deleteTodo, getFilteredTodos}) {
  return getFilteredTodos().map((todo) => (
    <Todoitem key={todo.id} todo={todo} markTodo={markTodo} deleteTodo={deleteTodo}/>
  ));
}
