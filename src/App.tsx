import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";
import {v1} from "uuid";
import {FilterValuePropsType} from "./components/ToDoList/FilterBtns/FilterBtns";

function App(): JSX.Element {
  const title: string = 'Sunday';
  const tasksArray: Array<TasksPropsType> = [
    {id: v1(), title: "HTML", isDone: true},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: false}
  ];

  const [tasks, setTasks] = useState<Array<TasksPropsType>>(tasksArray);
  const [filter, setFilter] = useState<FilterValuePropsType>('All');

  const changeTask = (taskId:string, newIsDone: boolean): void => {
    setTasks(tasks.map(task => (task.id === taskId) ? {...task, isDone: newIsDone} : task))
  }

  const removeTasks = (id: string): void => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const addTask = (title: string): void => {
    const newTask: TasksPropsType = {id: v1(), title: title, isDone: false}
    setTasks([newTask, ...tasks]);
  }


  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'Active':
        return !task.isDone;
        break;
      case 'Completed':
        return task.isDone;
        break;
      default:
        return task;
    }
  });

  const filterTasks = (filter: FilterValuePropsType): void => {
    setFilter(filter);
  }


  return (
    <StyledApp>
      <ToDoList
        title={title}
        tasks={filteredTasks}
        filter={filter}
        filterTasks={filterTasks}
        removeTasks={removeTasks}
        addTask={addTask}
        changeTask={changeTask}
      />
      <ToDoList
        title={title}
        tasks={filteredTasks}
        filter={filter}
        filterTasks={filterTasks}
        removeTasks={removeTasks}
        addTask={addTask}
        changeTask={changeTask}
      />
    </StyledApp>
  );
}


export default App;
