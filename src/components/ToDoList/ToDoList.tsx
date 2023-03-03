import {TaskAddForm} from "./TaskAddForm/TaskAddForm";
import {TasksList} from "./TasksList/TasksList";
import {FilterBtns, FilterValuePropsType} from "./FilterBtns/FilterBtns";
import {StyledHeading, StyledToDoList} from "./StyledToDoList";
import {FC} from "react";

type ToDoListPropsType = {
  title: string
  todoListid: string
  tasks: Array<TasksPropsType>
  filterTasks: (tasklistId:string, filter: FilterValuePropsType) => void
  removeTasks: (tasklistId:string, id: string) => void
  removeTodolist: (id: string) => void
  addTask: (tasklistId:string, title: string) => void
  changeTask: (tasklistId:string, taskId:string, newIsDone: boolean) => void
  filter: FilterValuePropsType
}
export type TasksPropsType = {
  id: string
  title: string
  isDone: boolean
}


export const ToDoList:FC<ToDoListPropsType> = (props):JSX.Element => {
  const removeTodolistHandler = () => {
    props.removeTodolist(props.todoListid);
  }

  return (
    <StyledToDoList>
      <button onClick={removeTodolistHandler}>X</button>
      <StyledHeading>{props.title}</StyledHeading>
      <TaskAddForm
        addTask={props.addTask}
        todoListid={props.todoListid}
      />
      <TasksList
        todoListid={props.todoListid}
        tasks={props.tasks}
        removeTasks={props.removeTasks}
        changeTask={props.changeTask}
      />
      <FilterBtns
        todoListid={props.todoListid}
        filter={props.filter}
        filterTasks={props.filterTasks}
      />
    </StyledToDoList>
  );
};