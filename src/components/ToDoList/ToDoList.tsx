import {TaskAddForm} from "./TaskAddForm/TaskAddForm";
import {TasksList} from "./TasksList/TasksList";
import {FilterBtns, FilterValuePropsType} from "./FilterBtns/FilterBtns";
import {StyledHeading, StyledToDoList} from "./StyledToDoList";
import {FC} from "react";

type ToDoListPropsType = {
  title: string
  tasks: TasksPropsType[]
  filterTasks: (filter: FilterValuePropsType) => void
  removeTasks: (id: string) => void
  addTask: (title: string) => void
  changeTask: (taskId:string, newIsDone: boolean) => void
  filter: FilterValuePropsType
}
export type TasksPropsType = {
  id: string
  title: string
  isDone: boolean
}


export const ToDoList:FC<ToDoListPropsType> = (props):JSX.Element => {
  return (
    <StyledToDoList>
      <StyledHeading>{props.title}</StyledHeading>
      <TaskAddForm addTask={props.addTask}/>
      <TasksList
        tasks={props.tasks}
        removeTasks={props.removeTasks}
        changeTask={props.changeTask}
      />
      <FilterBtns filter={props.filter} filterTasks={props.filterTasks}/>
    </StyledToDoList>
  );
};