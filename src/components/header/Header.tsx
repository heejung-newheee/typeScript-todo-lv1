import React from 'react';
import { styled } from 'styled-components';
import Layout from '../common/Layout';

const Header = () => {
    return (
        <header>
            <Layout>
                <h1>My Todo List</h1>
                <span>TypeScript - React</span>
            </Layout>
        </header>
    );
};

export default Header;
