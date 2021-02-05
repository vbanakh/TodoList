import React from "react";
import Todoitem from "../components/todoItem/TodoItem";

export default function Todos({ markItem, delItem, showTodos}) {
  return showTodos().map((todo) => (
    <Todoitem key={todo.id} todo={todo} markItem={markItem} delItem={delItem}/>
  ));
}
