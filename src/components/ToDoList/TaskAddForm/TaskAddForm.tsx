import styled from "styled-components";

export const TaskAddForm = () => {
  return (
    <StyledTaskAddFormWrap>
      <StyledInputTask type="text"/>
      <StyledBtnAdd>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
  );
}

export const StyledTaskAddFormWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const StyledInputTask = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
`
export const StyledBtnAdd = styled.button`
  font-size: 14px;
  padding: 10px 15px;
  cursor: pointer;
`