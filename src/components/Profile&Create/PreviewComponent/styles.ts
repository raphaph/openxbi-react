import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const CodePreviewStyles = styled.div<ThemeProps>`
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background:  ${(props) =>
        props.variant === 'light' ? 'rgba(246,246,246)' : props.theme["gray-900"]};
    border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

    width: 25rem;
    height: 25rem;
    border-radius: 8px;
    padding: 7.5% 5%;

`