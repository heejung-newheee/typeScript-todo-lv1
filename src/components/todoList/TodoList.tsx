import React from 'react';
import { Todo } from '../model/todo';
import TodoItem from '../todoItem/TodoItem';
import { styled } from 'styled-components';
interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    isDone: boolean;
}

const TodoList = ({ todos, setTodos, isDone }: TodoListProps) => {
    const switchTodo = (id: string): void => {
        const newTodos: Todo[] = todos.map((todo) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        console.log(newTodos);
        setTodos(newTodos);
    };

    const deleteTodo = (id: string): void => {
        const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    return (
        <div>
            <StTitle>{isDone ? '✅ Done ' : '🟩 To Do '}</StTitle>
            <StItemWrap>
                {todos
                    .filter((todo) => todo.isDone === isDone)
                    .map((todo) => {
                        return <TodoItem key={todo.id} item={todo} isDone={isDone} switchTodo={switchTodo} deleteTodo={deleteTodo} />;
                    })}
            </StItemWrap>
        </div>
    );
};

export default TodoList;

const StTitle = styled.h2`
    padding: 25px 0 5px;
`;
const StItemWrap = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;
