import {StyledTaskList, StyledTaskListCheckbox, StyledTaskListItm, StyledTaskListValue} from "./StyledTaskList";

export const TasksList = () => {
  return (
    <StyledTaskList>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox" checked={true}/>
          HTML&CSS
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox" checked={false}/>
          JS
        </StyledTaskListValue>
      </StyledTaskListItm>

      <StyledTaskListItm>
        <StyledTaskListValue>
          <StyledTaskListCheckbox type="checkbox" checked={true}/>
          REACT
        </StyledTaskListValue>
      </StyledTaskListItm>

    </StyledTaskList>
  )
}