import styled from "styled-components";

export const StyledFilterBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
interface StyledFilterBtnPropsType {
  active: boolean
}
export const StyledFilterBtn = styled.button<StyledFilterBtnPropsType>`
  padding: 10px 15px;
  border-radius: 3px;
  background-color: ${props => props.active ? '#0275ff' : '#fff'};
  color: ${props => props.active ? '#fff' : '#000'};
  border: 2px solid rgba(0,0,0,0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0275ff;
    color: #fff;
  }
`