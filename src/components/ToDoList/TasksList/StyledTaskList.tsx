import styled from "styled-components";

export const StyledTaskList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`
export const StyledTaskListItm = styled.li`
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
`
export const StyledBtnRemove = styled.button`
  margin-right: 10px;
  padding: 3px 5px;
  font-size: 8px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease;
  border: 2px solid rgba(0,0,0,0.2);
  &:hover {
    background-color: #0275ff;
    color: #fff;
  }
`
export const StyledTaskListCheckbox = styled.input`
  margin-right: 10px;
`
export const StyledTaskListLabel = styled.label`
  cursor: pointer;
`