import {StyledFilterBtn, StyledFilterBtnsWrap} from "./StyledFilterBtns";
import {FC} from "react";

type FilterBtnsPropsType = {
  filterTasks: (filter: string) => void
}

export const FilterBtns:FC<FilterBtnsPropsType> = (props):JSX.Element => {
  return (
    <StyledFilterBtnsWrap>
      <StyledFilterBtn onClick={() => props.filterTasks('All')}>ALL</StyledFilterBtn>
      <StyledFilterBtn onClick={() => props.filterTasks('Active')}>Active</StyledFilterBtn>
      <StyledFilterBtn onClick={() => props.filterTasks('Completed')}>Completed</StyledFilterBtn>
    </StyledFilterBtnsWrap>
  );
}

