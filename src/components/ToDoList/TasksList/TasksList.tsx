import {StyledTaskList, StyledTaskListCheckbox, StyledTaskListItm, StyledTaskListValue} from "./StyledTaskList";

export const TasksList = () => {
  return (
    <StyledTaskList>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox"/>
          HTML&CSS
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox"/>
          JS
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox"/>
          REACT
        </StyledTaskListValue>
      </StyledTaskListItm>

    </StyledTaskList>
  )
}