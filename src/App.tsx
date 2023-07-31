import React, { useRef, useState } from 'react';
import Header from './components/header/Header';
import Layout from './components/common/Layout';
import Footer from './components/footer/Footer';
import Input from './components/common/Input';

function App() {
    return (
        <>
            <Header />
            <Layout>
                <main>
                    <div>
                        <form>
                            <Input />
                        </form>
                    </div>

                    <div>
                        <div>
                            <h2>Todo</h2>
                            <div>
                                <h4>제목</h4>
                                <p>내용</p>
                                <button>삭제</button>
                                <button>상태변경</button>
                            </div>
                        </div>

                        <div>
                            <h2>Done</h2>
                            <div>
                                <h4>제목</h4>
                                <p>내용</p>
                                <button>삭제</button>
                                <button>상태변경</button>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
            <Footer />
        </>
    );
}

export default App;
