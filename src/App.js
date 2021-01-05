import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with husband",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Meeteng with boss",
        completed: false,
      },
    ],
  };
  // Choose item
  markItem = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Add item
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  // Delete item
  delItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  
  //Show completed item
  todoCompleted = () => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.completed === true)],
    });
    // console.log(this.state.todos.filter((todo)=> todo.completed === true))
  };

  //Show active items
  todoActive = () => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.completed === false)],
    });
  };

  //Show all items
  todoAll = () => {
    // this.setState({
    //   todos: this.state.todos.map((todo) => todo),
    // });
    this.setState({ todos: [...this.state.todos] });
  };
  
  //CleanCompleted
  clear = () => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.completed === false)],
    });
  } 

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markItem={this.markItem}
                    delItem={this.delItem}
                    todoCompleted={this.todoCompleted}
                  />
                  <Footer
                    todos={this.state.todos}
                    markItem={this.markItem}
                    todoCompleted={this.todoCompleted}
                    todoAll={this.todoAll}
                    todoActive={this.todoActive}
                    clear={this.clear}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
