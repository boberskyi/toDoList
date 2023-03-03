import {StyledFilterBtn, StyledFilterBtnsWrap} from "./StyledFilterBtns";
import {FC} from "react";

export type FilterValuePropsType = 'All' | 'Active' | 'Completed';
type FilterBtnsPropsType = {
  todoListid: string
  filterTasks: (ftasklistId:string, ilter: FilterValuePropsType) => void
  filter: FilterValuePropsType
}

export const FilterBtns:FC<FilterBtnsPropsType> = (props):JSX.Element => {
  const FilterBtnHandler = (filter: FilterValuePropsType): void => {
    props.filterTasks(props.todoListid, filter);
  }

  return (
    <StyledFilterBtnsWrap>
      <StyledFilterBtn active={props.filter === 'All'} onClick={() => FilterBtnHandler('All')}>All</StyledFilterBtn>
      <StyledFilterBtn active={props.filter === 'Active'} onClick={() => FilterBtnHandler('Active')}>Active</StyledFilterBtn>
      <StyledFilterBtn active={props.filter === 'Completed'} onClick={() => FilterBtnHandler('Completed')}>Completed</StyledFilterBtn>
    </StyledFilterBtnsWrap>
  );
}

