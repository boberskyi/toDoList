import {StyledTaskList, StyledTaskListCheckbox, StyledTaskListItm, StyledTaskListValue} from "./StyledTaskList";
import {TasksTypePropsType} from "../ToDoList";
import {FC} from "react";

type TasksListPropsType = {
  tasks: TasksTypePropsType[]
}

export const TasksList:FC<TasksListPropsType> = (props) => {
  return (
    <StyledTaskList>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox
            type="checkbox"
            checked={props.tasks[0].isDone}/>
          {props.tasks[0].title}
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox" checked={props.tasks[1].isDone}/>
          {props.tasks[1].title}
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox" checked={props.tasks[2].isDone}/>
          {props.tasks[2].title}
        </StyledTaskListValue>
      </StyledTaskListItm>

    </StyledTaskList>
  )
}