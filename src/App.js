import React, { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";
import FilterButton from "./components/filterButton/FilterButton";
import ClearButton from "./components/clearButton/ClearButton";

import "./App.scss";

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

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
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  });

  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

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

  //CleanCompleted
  function clear() {
    setState({
      todos: [...state.todos.filter((todo) => !todo.completed)],
    });
  }

  function showTodos() {
    return state.todos.filter(FILTER_MAP[filter]);
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <React.Fragment>
          <AddTodo addTodo={addTodo} />
          <Todos
            todos={state.todos}
            markItem={markItem}
            delItem={delItem}
            showTodos={showTodos}
          />
          <FilterButton filterList={filterList[0]} />
          <FilterButton filterList={filterList[1]} />
          <FilterButton filterList={filterList[2]} />
          <ClearButton todos={state.todos} clear={clear} />
        </React.Fragment>
      </div>
    </div>
  );
}
