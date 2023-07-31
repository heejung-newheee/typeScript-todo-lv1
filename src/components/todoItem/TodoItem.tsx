import React from 'react';
import { Todo } from '../model/Todo';
import Button, { BtnStyleType } from '../common/Button';
import { styled } from 'styled-components';
interface TodoItemProps {
    item: Todo;
    isDone: boolean;
    switchTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoItem = ({ item, isDone, switchTodo, deleteTodo }: TodoItemProps) => {
    return (
        <StTodoItem key={item.id}>
            <h4>{item.todoTitle}</h4>
            <p>{item.todoContents}</p>
            <Button
                type="button"
                btnStyleType={BtnStyleType.BTN_DELETE}
                onClick={() => {
                    deleteTodo(item.id);
                }}>
                삭제
            </Button>
            {item.isDone ? (
                <Button
                    type="button"
                    btnStyleType={BtnStyleType.BTN_CANCEL}
                    onClick={() => {
                        switchTodo(item.id);
                    }}>
                    취소
                </Button>
            ) : (
                <Button
                    type="button"
                    btnStyleType={BtnStyleType.BTN_DONE}
                    onClick={() => {
                        switchTodo(item.id);
                    }}>
                    완료
                </Button>
            )}
        </StTodoItem>
    );
};

export default TodoItem;

const StTodoItem = styled.div`
    width: calc((100% - 30px) / 4);
    border: solid 1px #ddd;
    padding: 10px;
    border-radius: 10px;
`;
