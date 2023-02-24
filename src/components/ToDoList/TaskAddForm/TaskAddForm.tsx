import {StyledBtnAdd, StyledInputTask, StyledTaskAddFormWrap} from "./StyledTaskAddForm";

export const TaskAddForm = () => {
  return (
    <StyledTaskAddFormWrap>
      <StyledInputTask type="text"/>
      <StyledBtnAdd>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
  );
}