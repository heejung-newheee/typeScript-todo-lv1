import React from 'react';
import { css, styled } from 'styled-components';

export enum BtnStyleType {
    BTN_SUBMIT = 'BTN_SUBMIT',
    BTN_DONE = 'BTN_DONE',
    BTN_CANCEL = 'BTN_CANCEL',
    BTN_DELETE = 'BTN_DELETE'
}

interface ButtonProps {
    type?: 'button' | 'submit';
    children: React.ReactNode;
    btnStyleType: BtnStyleType;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type = 'button', children, btnStyleType, disabled, onClick }: ButtonProps) => {
    return (
        <StButton type={type} $btnStyleType={btnStyleType} disabled={disabled} onClick={onClick}>
            {children}
        </StButton>
    );
};

// 공통 css style
const btnStyle = css`
    padding: 13px 25px;
    border-radius: 5px;
    margin: 10px 5px 10px 0;
`;

// 타입별 style
const StButton = styled.button<{ $btnStyleType: BtnStyleType }>`
    ${(props) => {
        switch (props.$btnStyleType) {
            case BtnStyleType.BTN_SUBMIT:
                return css`
                    ${btnStyle}
                    background-color: #5644dd;
                    color: #fff;
                    font-weight: bold;
                `;
            case BtnStyleType.BTN_DONE:
                return css`
                    ${btnStyle}
                    background-color: #0084ff;
                    color: #fff;
                    font-weight: bold;
                `;

            case BtnStyleType.BTN_CANCEL:
                return css`
                    ${btnStyle}
                    background-color: #ff6262;
                    color: #fff;
                    font-weight: bold;
                `;
            case BtnStyleType.BTN_DELETE:
                return css`
                    ${btnStyle}
                    background-color: #7e7e7e;
                    color: #fff;
                    font-weight: bold;
                `;
            default:
                return ``;
        }
    }}
`;

export default Button;
