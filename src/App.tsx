import React from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <ToDoList/>
    </StyledApp>
  );
}

const StyledApp = styled.main`
  display: flex;
  padding: 30px;
`

export default App;
