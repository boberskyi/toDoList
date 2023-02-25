import {StyledFilterBtn, StyledFilterBtnsWrap} from "./StyledFilterBtns";
import {FC} from "react";

export type FilterValuePropsType = 'All' | 'Active' | 'Completed';
type FilterBtnsPropsType = {
  filterTasks: (filter: FilterValuePropsType) => void
}

export const FilterBtns:FC<FilterBtnsPropsType> = (props):JSX.Element => {
  const FilterBtnHandler = (filter: FilterValuePropsType): void => props.filterTasks(filter);

  return (
    <StyledFilterBtnsWrap>
      <StyledFilterBtn onClick={() => FilterBtnHandler('All')}>ALL</StyledFilterBtn>
      <StyledFilterBtn onClick={() => FilterBtnHandler('Active')}>Active</StyledFilterBtn>
      <StyledFilterBtn onClick={() => FilterBtnHandler('Completed')}>Completed</StyledFilterBtn>
    </StyledFilterBtnsWrap>
  );
}

