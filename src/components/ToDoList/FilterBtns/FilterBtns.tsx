import {StyledFilterBtn, StyledFilterBtnsWrap} from "./StyledFilterBtns";

export const FilterBtns = () => {
  return (
    <StyledFilterBtnsWrap>
      <StyledFilterBtn>ALL</StyledFilterBtn>
      <StyledFilterBtn>Active</StyledFilterBtn>
      <StyledFilterBtn>Completed</StyledFilterBtn>
    </StyledFilterBtnsWrap>
  );
}

