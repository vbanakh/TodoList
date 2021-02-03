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

// };
// console.log(FILTER_MAP.map((item) => item));

//   Active: (todo) => !todo.completed,
//   Completed: (todo) => todo.completed,
// ;

// const FILTER_NAMES = Object.keys(FILTER_MAP);
// console.log(FILTER_NAMES);

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

  const filterList = FILTER_MAP.map((item) => (
    <FilterButton
      key={item.id}
      name={item.name}
      isPressed={item.name === filter}
      setFilter={setFilter}
    />
  ));
  console.log(filterList);

  // Choose item
  function markItem(id) {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

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

  function getFilteredTodos() {
    return state.todos.filter(
      FILTER_MAP.filter((item) => item[filter])[0][filter].filterTodo
    );
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
            getFilteredTodos={getFilteredTodos}
          />
          <FilterButton filterList={filterList} />
          {/* <FilterButton filterList={filterList[1]} />
          <FilterButton filterList={filterList[2]} /> */}
          <ClearButton todos={state.todos} clear={clear} />
        </React.Fragment>
      </div>
    </div>
  );
}
