import {TaskAddForm} from "./TaskAddForm/TaskAddForm";
import {TasksList} from "./TasksList/TasksList";
import {FilterBtns} from "./FilterBtns/FilterBtns";
import {StyledHeading, StyledToDoList} from "./StyledToDoList";

export const ToDoList = () => {
  return (
    <StyledToDoList>
      <StyledHeading>Todolist</StyledHeading>
      <TaskAddForm/>
      <TasksList/>
      <FilterBtns/>
    </StyledToDoList>
  );
};