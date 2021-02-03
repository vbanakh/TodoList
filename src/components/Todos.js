import React from "react";
import Todoitem from "./TodoItem";

export default function Todos({ markItem, delItem, getFilteredTodos}) {
  return getFilteredTodos().map((todo) => (
    <Todoitem key={todo.id} todo={todo} markItem={markItem} delItem={delItem}/>
  ));
}
