import React, { Component } from "react";
import Todoitem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markItem={this.props.markItem}
        delItem={this.props.delItem}
      />
    ));
  }
}

export default Todos;
