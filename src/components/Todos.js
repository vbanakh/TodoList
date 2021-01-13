import React from "react";
import Todoitem from "./TodoItem";

export default function Todos({ todos, markItem, delItem }) {
  return todos.map((todo) => (
    <Todoitem key={todo.id} todo={todo} markItem={markItem} delItem={delItem} />
  ));
}
