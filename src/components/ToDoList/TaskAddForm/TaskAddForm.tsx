import styled from "styled-components";

export const TaskAddForm = () => {
  return (
    <div>
      <StyledInputTask type="text"/>
      <StyledBtnAdd>+</StyledBtnAdd>
    </div>
  );
}

export const StyledInputTask = styled.input`
  padding: 10px 15px;
  font-size: 14px;
`
export const StyledBtnAdd = styled.button`

`