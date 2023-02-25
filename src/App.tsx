import React from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";

function App(): JSX.Element {
  const title: string = 'Sunday';
  const tasksArray: Array<TasksPropsType> = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "JS", isDone: false}
  ];

  const [tasks, setTasks] = React.useState<Array<TasksPropsType>>(tasksArray);

  const filterTasks = (filter: string): void => {
    setTasks(tasksArray.filter(task => {
      switch (filter) {
        case 'Active':
          return task.isDone === false;
          break;
        case 'Completed':
          return task.isDone === true;
          break;
        default:
          return task;
      }
    }));

  }

  return (
    <StyledApp>
      <ToDoList
        title={title}
        tasks={tasks}
        filterTasks={filterTasks}
      />
    </StyledApp>
  );
}


export default App;
