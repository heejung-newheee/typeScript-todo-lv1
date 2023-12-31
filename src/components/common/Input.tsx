import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button, { BtnStyleType } from './Button';
import { Todo } from '../model/Todo';
import shortid from 'shortid';
interface FormProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Input = ({ todos, setTodos }: FormProps) => {
    const [todoTitle, setTodoTitle] = useState<string>('');
    const [todoContents, setTodoContents] = useState<string>('');

    const resetHandler = () => {
        setTodoTitle('');
        setTodoContents('');
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newTodo = { id: shortid.generate(), todoTitle, todoContents, isDone: false };
        setTodos([...todos, newTodo]);
        resetHandler();
    };
    return (
        <StInputForm onSubmit={submitHandler}>
            <StInputWrap>
                <StLabel htmlFor="TodoTit"> 제목 </StLabel>
                <StInput
                    id="TodoTit"
                    type="text"
                    value={todoTitle}
                    onChange={(e) => {
                        setTodoTitle(e.target.value);
                    }}
                />
                <StLabel htmlFor="TodoCon"> 내용 </StLabel>
                <StInput
                    id="TodoCon"
                    type="text"
                    value={todoContents}
                    onChange={(e) => {
                        setTodoContents(e.target.value);
                    }}
                />
                <Button type="submit" btnStyleType={BtnStyleType.BTN_SUBMIT}>
                    등록하기
                </Button>
            </StInputWrap>
        </StInputForm>
    );
};

export default Input;

const StInputForm = styled.form`
    background: #efefef;
    padding: 20px;
    border-radius: 5px;
`;
const StInputWrap = styled.div`
    margin: 10px 0;
`;
const StLabel = styled.label`
    /* display: none; */
    margin-right: 5px;
`;
const StInput = styled.input`
    padding: 15px 10px;
    margin-right: 15px;
    border: none;
    border: solid 1px #ddd;
    border-radius: 5px;
    &:active,
    &:focus {
        border: solid 1px #badf76;
    }
`;
