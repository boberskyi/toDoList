import {StyledBtnAdd, StyledInputTask, StyledTaskAddFormWrap} from "./StyledTaskAddForm";
import {FC, useState} from "react";

type TaskAddFormPropsType = {
  addTask: (title: string) => void
}

export const TaskAddForm:FC<TaskAddFormPropsType> = (props):JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }
  const onClickHandler = () => {
    props.addTask(title)
    setTitle('');
  }

  return (
    <StyledTaskAddFormWrap>
      <StyledInputTask onChange={onChangeHandler} value={title} type="text"/>
      <StyledBtnAdd onClick={onClickHandler}>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
  );
}