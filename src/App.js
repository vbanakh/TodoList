import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [state, setState] = useState({ 
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
      filter: 'ALL',
  })
 
  // Choose item
  const markItem = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Add item
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  // Delete item
  const delItem = (id) => {
    setState({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    });
  };
  
  //Show completed item
  // todoCompleted = () => {
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) => todo.completed === true)],
  //   });
  //   // console.log(this.state.todos.filter((todo)=> todo.completed === true))
  // };

  // //Show active items
  // todoActive = () => {
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) => todo.completed === false)],
  //   });
  // };

  // //Show all items
  // todoAll = () => {
  //   // this.setState({
  //   //   todos: this.state.todos.map((todo) => todo),
  //   // });
  //   this.setState({ todos: [...this.state.todos] });
  // };
  
  // //CleanCompleted
  // clear = () => {
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) => todo.completed === false)],
  //   });
  // } 


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
                  <AddTodo addTodo={addTodo} />
                  <Todos
                    todos={state.todos}
                    markItem={markItem}
                    delItem={delItem}
                    // todoCompleted={this.todoCompleted}
                  />
                  <Footer
                    todos={state.todos}
                    markItem={markItem}
                    // todoCompleted={this.todoCompleted}
                    // todoAll={this.todoAll}
                    // todoActive={this.todoActive}
                    // clear={this.clear}
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


