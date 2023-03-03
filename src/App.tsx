import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";
import {v1} from "uuid";
import {FilterValuePropsType} from "./components/ToDoList/FilterBtns/FilterBtns";

type ToDoListsType = {
  id: string
  title: string
  filter: FilterValuePropsType
}

function App(): JSX.Element {

  const title: string = 'Sunday';
  const tasksArray: Array<TasksPropsType> = [
    {id: v1(), title: "HTML", isDone: true},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: false}
  ];

  const [tasks, setTasks] = useState<Array<TasksPropsType>>(tasksArray);

  let [todolists, setTodolists] = useState<Array<ToDoListsType>>([
    {id: v1(), title: 'Sunday', filter: 'Active'},
    {id: v1(), title: 'Monday', filter: 'All'},
  ])


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




  const filterTasks = (tasklistId:string, filter: FilterValuePropsType): void => {
    setTodolists(todolists.map(tl => tl.id === tasklistId ? {...tl, filter: filter}: tl));
  }


  return (
    <StyledApp>
      {todolists.map(tl => {
        const filteredTasks = tasks.filter(task => {
          if(tl.filter === 'Active') return !task.isDone;
          if(tl.filter === 'Completed') return task.isDone;
          else return task;
          })


        return (
          <ToDoList
            key={tl.id}
            todoListid={tl.id}
            title={tl.title}
            tasks={filteredTasks}
            filter={tl.filter}
            filterTasks={filterTasks}
            removeTasks={removeTasks}
            addTask={addTask}
            changeTask={changeTask}
          />
        )
      })}

    </StyledApp>
  );
}


export default App;
