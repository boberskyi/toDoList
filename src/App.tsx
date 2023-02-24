import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App() {
  return (
    <StyledApp>
      <ToDoList/>
    </StyledApp>
  );
}



export default App;
