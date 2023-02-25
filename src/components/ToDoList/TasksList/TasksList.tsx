import {
  StyledBtnRemove,
  StyledTaskList,
  StyledTaskListCheckbox,
  StyledTaskListItm,
  StyledTaskListLabel, StyledText
} from "./StyledTaskList";
import {TasksPropsType} from "../ToDoList";
import {FC} from "react";

type TasksListPropsType = {
  tasks: TasksPropsType[]
  removeTasks: (id: string) => void
}

export const TasksList: FC<TasksListPropsType> = (props):JSX.Element => {
  return (
    <StyledTaskList>
      {props.tasks.length > 0
        ? props.tasks.map(task => {
        return (
          <StyledTaskListItm key={task.id}>
            <StyledBtnRemove
              onClick={() => props.removeTasks(task.id)}>
              X
            </StyledBtnRemove>
            <StyledTaskListLabel>
              <StyledTaskListCheckbox
                type="checkbox"
                checked={task.isDone}/>
              <StyledText completed={task.isDone}>
                {task.title}
              </StyledText>
            </StyledTaskListLabel>
          </StyledTaskListItm>
        )
      })
        : <div>There are no tasks</div>
      }
    </StyledTaskList>
  )
}