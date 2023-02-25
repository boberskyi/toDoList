import {StyledFilterBtn, StyledFilterBtnsWrap} from "./StyledFilterBtns";
import {FC} from "react";

type FilterBtnsPropsType = {
  filterTasks: (filter: string) => void
}

export const FilterBtns:FC<FilterBtnsPropsType> = (props):JSX.Element => {
  const FilterBtnHandler = (filter: string): void => props.filterTasks(filter);

  return (
    <StyledFilterBtnsWrap>
      <StyledFilterBtn onClick={() => FilterBtnHandler('All')}>ALL</StyledFilterBtn>
      <StyledFilterBtn onClick={() => FilterBtnHandler('Active')}>Active</StyledFilterBtn>
      <StyledFilterBtn onClick={() => FilterBtnHandler('Completed')}>Completed</StyledFilterBtn>
    </StyledFilterBtnsWrap>
  );
}

