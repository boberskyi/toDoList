import React from 'react';
import './App.css';
import {TasksTypePropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App() {
  const tasks1:Array<TasksTypePropsType> = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "JS", isDone: false}
  ];

  const tasks2:Array<TasksTypePropsType> = [
    {id: 1, title: "React", isDone: true},
    {id: 2, title: "Redux", isDone: true},
    {id: 3, title: "TypeScript", isDone: false}
  ];


  return (
    <StyledApp>
      <ToDoList title={"Sunday"} tasks={tasks1}/>
      <ToDoList title={"Monday"} tasks={tasks2}/>
    </StyledApp>
  );
}



export default App;
