import {StyledBtnAdd, StyledErrorMsg, StyledInputTask, StyledTaskAddFormWrap} from "./StyledTaskAddForm";
import {FC, useState} from "react";

type TaskAddFormPropsType = {
  addTask: (title: string) => void
}

export const TaskAddForm:FC<TaskAddFormPropsType> = (props):JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setError(null);
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (title.trim() !== '') ? props.addTask(title.trim()) : setError('Title is required!');

      setTitle('');
    }
  }

  const onClickHandler = () => {
    (title.trim() !== '') ? props.addTask(title.trim()) : setError('Title is required!');
    setTitle('');
  }

  return (
    <>
    <StyledTaskAddFormWrap>
      <StyledInputTask
        onChange={onChangeHandler}
        onKeyUp={onKeyPressHandler}
        error={error}
        value={title}
        type="text"
      />
      <StyledBtnAdd onClick={onClickHandler}>+</StyledBtnAdd>
    </StyledTaskAddFormWrap>
      {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
    </>
  );
}