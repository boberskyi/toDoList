import {
  StyledBtnRemove,
  StyledTaskList,
  StyledTaskListCheckbox,
  StyledTaskListItm,
  StyledTaskListLabel, StyledText
} from "./StyledTaskList";
import {TasksPropsType} from "../ToDoList";
import {ChangeEvent, FC} from "react";

type TasksListPropsType = {
  tasks: TasksPropsType[]
  removeTasks: (tasklistId:string, id: string) => void
  changeTask: (taskId:string, newIsDone: boolean) => void
  todoListid: string
}

export const TasksList: FC<TasksListPropsType> = (props):JSX.Element => {

  return (
    <StyledTaskList>
      {props.tasks.length > 0
        ? props.tasks.map(task => {
          const CheckboxOnClickHandler = (e:ChangeEvent<HTMLInputElement>) => {
            props.changeTask(task.id, e.currentTarget.checked);
          }
        return (
          <StyledTaskListItm key={task.id}>
            <StyledBtnRemove
              onClick={() => props.removeTasks(props.todoListid, task.id)}>
              X
            </StyledBtnRemove>
            <StyledTaskListLabel opacity={task.isDone}>
              <StyledTaskListCheckbox
                type="checkbox"
                checked={task.isDone}
                onChange={CheckboxOnClickHandler}
              />
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