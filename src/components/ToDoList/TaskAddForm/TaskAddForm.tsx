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

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.addTask(title.trim())
      setTitle('');
    }
  }

  const onClickHandler = () => {
    props.addTask(title.trim())
    setTitle('');
  }

  return (
    <StyledTaskAddFormWrap>
      <StyledInputTask
        onChange={onChangeHandler}
        onKeyUp={onKeyPressHandler}
        value={title}
        type="text"
      />
      <StyledBtnAdd onClick={onClickHandler}>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
  );
}