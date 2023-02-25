import styled from "styled-components";

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
  border: 2px solid rgba(0, 0, 0, 0.2);
`
export const StyledBtnAdd = styled.button`
  font-size: 14px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    background-color: #0275ff;
    color: #fff;
  }
`