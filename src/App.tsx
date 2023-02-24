import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App() {
  return (
    <StyledApp>
      <ToDoList title={"Sunday"}/>
      <ToDoList title={"Monday"}/>
      <ToDoList title={"Tuesday"}/>
    </StyledApp>
  );
}



export default App;
