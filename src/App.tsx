import React, { useState } from 'react';
import Header from './components/header/Header';
import Layout from './components/common/Layout';
import Footer from './components/footer/Footer';
import Input from './components/common/Input';
import TodoList from './components/todoList/TodoList';
import { Todo, initialTodo } from './components/model/Todo';
import GlobalStyle from './GlobalStyle';

function App() {
    const [todos, setTodos] = useState<Todo[]>(initialTodo);
    return (
        <>
            <GlobalStyle />
            <Header />
            <Layout>
                <Input todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} isDone={false} />
                <TodoList todos={todos} setTodos={setTodos} isDone={true} />
            </Layout>
            <Footer />
        </>
    );
}

export default App;
