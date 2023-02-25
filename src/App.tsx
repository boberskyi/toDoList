import React from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App():JSX.Element {
  const tasks:Array<TasksPropsType> = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "JS", isDone: false}
  ];

  const title:string = 'Sunday';


  return (
    <StyledApp>
      <ToDoList title={title} tasks={tasks}/>
    </StyledApp>
  );
}



export default App;
