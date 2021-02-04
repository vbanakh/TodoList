import React, { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";
import FilterButton from "./components/filterButton/FilterButton";
import ClearButton from "./components/clearButton/ClearButton";

import "./App.scss";

const FILTER_MAP = [
  {
    ALL: {
      name: "ALL",
      id: "ALL",
      filterTodo: () => true,
    },
  },
  {
    ACTIVE: {
      name: "ACTIVE",
      id: "ACTIVE",
      filterTodo: (todo) => !todo.completed,
    },
  },
  {
    COMPLETED: {
      name: "COMPLETED",
      id: "COMPLETED",
      filterTodo: (todo) => todo.completed,
    },
  },
];

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

  const [filter, setFilter] = useState(FILTER_MAP[0].ALL.id);

  // Mark as checked to-do
  function markTodo(id) {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  //Add new to-do
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  // Delete one to-do
  const deleteTodo = (id) => {
    setState({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Delete all completed to-dos
  function clear() {
    setState({
      todos: [...state.todos.filter((todo) => !todo.completed)],
    });
  }

  //Get filtered to-dos
  function getFilteredTodos() {
    return state.todos.filter(
      FILTER_MAP.filter((item) => item[filter])[0][filter].filterTodo
    );
  }

  //Get key from the filter object
  function getFilterKeyName(filterObject) {
    return filterObject[Object.keys(filterObject)];
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <React.Fragment>
          <AddTodo addTodo={addTodo} />
          <Todos
            todos={state.todos}
            markTodo={markTodo}
            deleteTodo={deleteTodo}
            getFilteredTodos={getFilteredTodos}
          />
          <FilterButton
            filterList={FILTER_MAP.map((item) => (
              <FilterButton
                key={getFilterKeyName(item).id}
                name={getFilterKeyName(item).name}
                isPressed={getFilterKeyName(item).name === filter}
                setFilter={setFilter}
              />
            ))}
          />
          <ClearButton todos={state.todos} clear={clear} />
        </React.Fragment>
      </div>
    </div>
  );
}
