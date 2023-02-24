import {StyledTaskList, StyledTaskListCheckbox, StyledTaskListItm, StyledTaskListLabel} from "./StyledTaskList";
import {TasksTypePropsType} from "../ToDoList";
import {FC} from "react";

type TasksListPropsType = {
  tasks: TasksTypePropsType[]
}

export const TasksList: FC<TasksListPropsType> = (props) => {
  return (
    <StyledTaskList>
      {props.tasks.length > 0
        ? props.tasks.map(task => {
        return (
          <StyledTaskListItm key={task.id}>
            <StyledTaskListLabel>
              <StyledTaskListCheckbox
                type="checkbox"
                checked={task.isDone}/>
              {task.title}
            </StyledTaskListLabel>
          </StyledTaskListItm>
        )
      })
        : <div>There are no tasks</div>
      }
    </StyledTaskList>
  )
}