import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Button, { BtnStyleType } from './Button';

interface TodoList {
    todoTitle: string;
    todoContents: string;
}

interface InputItemProps {
    id?: string;
    type: string;
    title: string;
    contents: string;
    autoFocus?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = () => {
    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [todoTitle, setTodoTitle] = useState<string>('');
    const [todoContents, setTodoContents] = useState<string>('');
    const todoTitleRef = useRef<HTMLInputElement>(null);

    const resetHandler = () => {
        setTodoTitle('');
        setTodoContents('');

        const todoTitleCurrent = todoTitleRef.current;
        if (!todoTitleCurrent) return;
        todoTitleCurrent.focus();
    };

    const submitHandler = () => {
        const newTodo = { todoTitle, todoContents };
        setTodoList([...todoList, newTodo]);
        resetHandler();
    };
    return (
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
            <Button type="submit" btnStyleType={BtnStyleType.BTN_SUBMIT} onClick={submitHandler}>
                등록하기
            </Button>
        </StInputWrap>
    );
};

export default Input;

const StInputWrap = styled.div`
    margin: 10px;
`;
const StLabel = styled.label`
    display: none;
`;
const StInput = styled.input`
    padding: 15px 25px;
    border: none;
    border: solid 1px #ddd;
    &:active,
    &:focus {
        outline: none;
        border: solid 1px #badf76;
    }
`;

// 재사용 input 태그로 만들어보긩
// interface InputItemProps {
//     type: string;
//     title: string;
//     id?: string;
//     name: string;
//     autoFocus?: boolean;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Input = ({ type, title, name, id = name, autoFocus, value, onChange }: InputItemProps, ref: Ref<HTMLInputElement>) => {
//     return (
//         <StInputWrap>
//             <StLabel htmlFor={id}> {title} </StLabel>
//             <StInput ref={ref} type={type} id={id} name={name} autoFocus={autoFocus} value={value} onChange={onChange} />
//         </StInputWrap>
//     );
// };

// export default forwardRef(Input);
