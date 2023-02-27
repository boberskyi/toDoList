import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";
import {v1} from "uuid";
import {FilterValuePropsType} from "./components/ToDoList/FilterBtns/FilterBtns";


type TodoListType = {
  id: string
  filter: FilterValuePropsType
  title: string
}

function App(): JSX.Element {
  const title: string = 'Sunday';

  const todoLists:TodoListType[] = [
    {id: v1(), title: 'What to learn', filter: 'Active'},
    {id: v1(), title: 'What to buy', filter: 'Completed'}
  ];

  const tasksArray: Array<TasksPropsType> = [
    {id: v1(), title: "HTML", isDone: true},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: false}
  ];

  const [tasks, setTasks] = useState<Array<TasksPropsType>>(tasksArray);
  const [filter, setFilter] = useState<FilterValuePropsType>('All');

  const changeTask = (taskId: string, newIsDone: boolean): void => {
    setTasks(tasks.map(task => (task.id === taskId) ? {...task, isDone: newIsDone} : task))
  }

  const removeTasks = (id: string): void => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const addTask = (title: string): void => {
    const newTask: TasksPropsType = {id: v1(), title: title, isDone: false}
    setTasks([newTask, ...tasks]);
  }




  const filterTasks = (filter: FilterValuePropsType): void => {
    setFilter(filter);
  }


  return (
    <StyledApp>
      {todoLists.map(todoList => {
        const filteredTasks = tasks.filter(task => {
          switch (todoList.filter) {
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

        return (
          <ToDoList
            title={todoList.title}
            tasks={filteredTasks}
            filter={todoList.filter}
            filterTasks={filterTasks}
            removeTasks={removeTasks}
            addTask={addTask}
            changeTask={changeTask}
          />
        )
      })
      }
    </StyledApp>
  );
}


export default App;
