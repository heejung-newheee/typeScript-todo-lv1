import React, { useRef, useState } from 'react';
import Header from './components/header/Header';
import Layout from './components/common/Layout';
import Footer from './components/footer/Footer';
import Input from './components/common/Input';
import TodoList from './components/todoList/TodoList';
import { Todo, initialTodo } from './components/model/todo';
import GlobalStyle from './GlobalStyle';

function App() {
    const [todos, setTodos] = useState<Todo[]>(initialTodo);
    console.log(todos);
    return (
        <>
            <GlobalStyle />
            <Header />
            <Layout>
                <main>
                    <div>
                        <Input todos={todos} setTodos={setTodos} />
                    </div>

                    <div>
                        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
                        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
                    </div>
                </main>
            </Layout>
            <Footer />
        </>
    );
}

export default App;
