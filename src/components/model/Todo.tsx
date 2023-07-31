import shortid from 'shortid';

export type TodoList = {
    todoList: Todo[];
};

export type Todo = {
    id: string;
    todoTitle: string;
    todoContents: string;
    isDone: boolean;
};

export const initialTodo: Todo[] = [
    {
        id: shortid.generate(),
        todoTitle: '타입스크립트',
        todoContents: 'Lv1 과제 완성하기',
        isDone: true
    },
    { id: shortid.generate(), todoTitle: '타입스크립트', todoContents: 'Lv2 과제 완성하기', isDone: false },
    { id: shortid.generate(), todoTitle: '타입스크립트', todoContents: '강의듣기', isDone: true }
];
