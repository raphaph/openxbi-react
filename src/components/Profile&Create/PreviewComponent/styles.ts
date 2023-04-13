import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const CodePreviewStyles = styled.div<ThemeProps>`
    font-family: 'Inter', sans-serif;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background:  ${(props) =>
        props.variant === 'light' ? props.theme["preview-light"] : props.theme["preview-dark"]};
    background-position: center;
    background-size: cover;
    border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

    width: 25.1rem;
    height: 25rem;
    border-radius: 8px;
    padding: 7.5% 5%;

    iframe {
        text-align: center;
        margin: 0 auto;
    }
`