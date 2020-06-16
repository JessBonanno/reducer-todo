import React, { useState, useReducer } from "react";
import { initialState, listReducer } from "./reducers/reducer";
import moment from 'moment';

import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");

  //correctly handling changes
  const handleChanges = e => {
    setTask(e.target.value);
    console.log(task);
  };
  // correctly adding items
  const handleAddItem = e => {
    e.preventDefault();
    if (task !== "") {
      dispatch({ type: "ADD_ITEM", payload: task });
      setTask("");
    }
  };
  // correctly toggling completed value
  const handleToggleCompleted = value => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: value });
  };
  //   correctly clearing completed
  const handleClearCompleted = e => {
    e.preventDefault();
    console.log("handler: ", state);
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reducer Todo App</h1>
      </header>
      <TodoForm
        handleChanges={handleChanges}
        handleAddItem={handleAddItem}
        handleClearCompleted={handleClearCompleted}
        task={task}
      />
      <TodoList
        taskList={state}
        handleToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
}

export default App;
