import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const EmbeddingDaxContainer = styled.main<ThemeProps>`
    display: flex;

    @media (max-width: 800px) {
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

export const EmbeddingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    max-width: 1200px;
    width: 100%;
`

export const EmbeddingText = styled.div`
    max-width: 900px;
    width: 100%;
    padding: 3.5rem 2rem;

    h1 {
        margin-bottom: .6rem;
    }

    strong {
        color: ${props => props.theme.primary}
    }

    p {
        margin-top: 3rem;
        line-height: 1.8;
    }

    h2 {
        margin-top: 4rem;
    }

    h3 {
        margin-top: 3rem;
    }

    hr {
        margin-top: 1rem;
    }

    a {
        color: inherit;
    }
`

export const SyntaxHighlighterEmbedding = styled(SyntaxHighlighter) <ThemeProps>`

    max-width: 1000px;
    width: 100%;
    height: auto;

    margin-top: 1rem !important;

    transition: 300ms;
    background: rgba(52, 22, 227, 0.1) !important;

    span {
        font-family: 'Fira Code', monospace;
        font-size: 0.875rem;
    }

    @media(max-width: 800px) {
        width: 100%;
    }

    border-radius: 10px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0.6rem;
    }

    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
    }
`