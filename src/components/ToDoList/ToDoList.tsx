import {TaskAddForm} from "./TaskAddForm/TaskAddForm";
import {TasksList} from "./TasksList/TasksList";
import {FilterBtns} from "./FilterBtns/FilterBtns";
import {StyledHeading, StyledToDoList} from "./StyledToDoList";
import {FC} from "react";

type ToDoListPropsType = {
  title: string;
}


export const ToDoList:FC<ToDoListPropsType> = (props) => {
  return (
    <StyledToDoList>
      <StyledHeading>{props.title}</StyledHeading>
      <TaskAddForm/>
      <TasksList/>
      <FilterBtns/>
    </StyledToDoList>
  );
};