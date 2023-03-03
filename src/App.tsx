import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, ToDoList} from "./components/ToDoList/ToDoList";
import {StyledApp} from "./StyledApp";
import {v1} from "uuid";
import {FilterValuePropsType} from "./components/ToDoList/FilterBtns/FilterBtns";

type TodolistsType = {
  id: string
  title: string
  filter: FilterValuePropsType
}

// type TaskStateType = {
//   [key: string]: Array<TasksPropsType>
// }

function App(): JSX.Element {
  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'All'},
    {id: todolistID2, title: 'What to buy', filter: 'All'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS', isDone: false},

    ],
    [todolistID2]: [
      {id: v1(), title: 'Rest API', isDone: true},
      {id: v1(), title: 'GraphQL', isDone: false},
    ]
  })

  const changeTask = (taskId:string, newIsDone: boolean): void => {
    //setTasks(tasks.map(task => (task.id === taskId) ? {...task, isDone: newIsDone} : task))
  }

  const removeTasks = (id: string): void => {
    // setTasks(tasks.filter(task => task.id !== id));
  }

  const addTask = (title: string): void => {
    // const newTask: TasksPropsType = {id: v1(), title: title, isDone: false}
    // setTasks([newTask, ...tasks]);
  }

  const filterTasks = (tasklistId:string, filter: FilterValuePropsType): void => {
    setTodolists(todolists.map(tl => tl.id === tasklistId ? {...tl, filter: filter}: tl));
  }

  return (
    <StyledApp>
      {todolists.map(tl => {
        const filteredTasks = tasks[tl.id].filter(task => {
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
