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

  const title1:string = 'Sunday';
  const title2:string = 'Monday';


  return (
    <StyledApp>
      <ToDoList title={title1} tasks={tasks1}/>
      <ToDoList title={title2} tasks={tasks2}/>
    </StyledApp>
  );
}



export default App;
