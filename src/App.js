import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About'

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Dinner with husband",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Meeteng with boss",
        completed: false
      }
    ]
  }
  // Choose item
  markItem = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    });
  }

   //Add item
   addTodo = title =>{
     const newTodo = {
      id: uuidv4(),
      title,
      completed: false
     };
     this.setState({ todos: [...this.state.todos, newTodo]})
   }

  // Delete item
  delItem = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
 
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markItem={this.markItem} delItem={this.delItem} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}


export default App;

