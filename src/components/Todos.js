import React from "react";
import Todoitem from "./TodoItem";

export default function Todos({ todos, markItem, delItem, FILTER_MAP}) {
  return todos.filter(FILTER_MAP).map((todo) => (
    <Todoitem key={todo.id} todo={todo} markItem={markItem} delItem={delItem}/>
  ));
}
