import {TaskAddForm} from "./TaskAddForm/TaskAddForm";
import {TasksList} from "./TasksList/TasksList";
import {FilterBtns} from "./FilterBtns/FilterBtns";
import {StyledHeading, StyledToDoList} from "./StyledToDoList";
import {FC} from "react";

type ToDoListPropsType = {
  title: string
  tasks: TasksPropsType[]
}
export type TasksPropsType = {
  id: number
  title: string
  isDone: boolean
}


export const ToDoList:FC<ToDoListPropsType> = (props):JSX.Element => {
  return (
    <StyledToDoList>
      <StyledHeading>{props.title}</StyledHeading>
      <TaskAddForm/>
      <TasksList tasks={props.tasks}/>
      <FilterBtns/>
    </StyledToDoList>
  );
};