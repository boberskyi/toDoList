import styled from "styled-components";

export const StyledTaskAddFormWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`
interface StyledInputTaskPropsType {
  error: string | null
}
export const StyledInputTask = styled.input<StyledInputTaskPropsType>`
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.error ? 'red' : 'rgba(0, 0, 0, 0.2)'};
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
export const StyledErrorMsg = styled.div`
  color: red;
  margin-bottom: 10px;
`