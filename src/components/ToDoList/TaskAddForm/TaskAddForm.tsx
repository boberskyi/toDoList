import {StyledBtnAdd, StyledInputTask, StyledTaskAddFormWrap} from "./StyledTaskAddForm";

export const TaskAddForm = ():JSX.Element => {
  return (
    <StyledTaskAddFormWrap>
      <StyledInputTask type="text"/>
      <StyledBtnAdd>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
  );
}