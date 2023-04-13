import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const CodePreviewStyles = styled.div<ThemeProps>`
    font-family: 'Inter', sans-serif;

    display: flex; /* Define o elemento pai como um flex container */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    height: 100vh; /* Define a altura do elemento pai */
    width: 100vw;

    background:  ${(props) =>
        props.variant === 'light' ? props.theme["preview-light"] : props.theme["preview-dark"]};
    border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

    width: 25.1rem;
    height: 25rem;
    border-radius: 8px;
    padding: 1.5% 2%;
        
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0;
    }
`