import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.todoAll}>All</button>
        <button onClick={this.props.todoActive}>Active</button>
        <button onClick={this.props.todoCompleted}>Completed</button>
        <button onClick={this.props.clear}>Clear completed</button>
      </div>
    );
  }
}

export default Footer;
