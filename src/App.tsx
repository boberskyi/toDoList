import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App() {
  return (
    <StyledApp>
      <ToDoList title={"ToDoList 1"}/>
      <ToDoList title={"ToDoList 2"}/>
    </StyledApp>
  );
}



export default App;
