import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const IntroductionContainer = styled.main<ThemeProps>`

    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme.black};
    transition: background 300ms;

    background-size: 100%;
    border-bottom: 1px solid
        ${(props) =>
        props.variant === 'light'
            ? props.theme['gray-100']
            : props.theme['gray-900']};

    border-top: 1px solid
        ${(props) =>
        props.variant === 'light'
            ? props.theme['gray-100']
            : props.theme['gray-900']};

`