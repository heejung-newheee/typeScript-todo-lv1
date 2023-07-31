import React from 'react';
import { styled } from 'styled-components';
import Layout from '../common/Layout';

const Header = () => {
    return (
        <header>
            <Layout>
                <span>My Todo List ✅</span>
                <span>React</span>
            </Layout>
        </header>
    );
};

export default Header;
