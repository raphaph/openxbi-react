import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const DaxFormattingContainer = styled.main<ThemeProps>`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme.black};
    transition: background 300ms;

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

export const DaxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1200px;
    width: 100%;
`

export const DaxText = styled.div`
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

export const SyntaxHighlighterDAX = styled(SyntaxHighlighter) <ThemeProps>`

    max-width: 600px;
    width: 100%;
    height: auto;

    margin-top: 1rem !important;

    transition: 300ms;
    background: ${(props) =>
        props.variant === 'light' ? props.theme['gray-200'] : props.theme.offblack};

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
export const TableContainer = styled.div<ThemeProps>`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;


table { 
    max-width: 700px;
    width: auto; /* Largura da tabela, modifque conforme número de colunas */ 
    border-collapse: collapse;

    th { /* th - é o header da tabela */
    background-color: ${(props) =>
        props.variant === 'light' ? props.theme['gray-200'] : props.theme.offblack}; /* Cor do cabeçalho */
    padding: 1rem;
    text-align: left;
    color: ${(props) =>
        props.variant === 'light' ? props.theme.offblack : props.theme['gray-200']};
    font-size: 0.875rem;
    line-height: 1.6;
    width: auto;

    &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;

}

    &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
    }
    }

    td { /* td - são as linhas da tabela */
    
    cursor: pointer;
    background-color: ${(props) =>
        props.variant === 'light' ? props.theme['gray-200'] : props.theme.black}; /* Cor das linhas */
    color: ${(props) =>
        props.variant === 'light' ? props.theme.black : props.theme.white};
    border-top: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['gray-300'] : props.theme["gray-900"]};  /* Cor das linhas separadoras*/
    padding: 0.7rem;
    font-size: 1rem;
    line-height: 1.2;
    width: auto;

    &:first-child {
    padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }

    &:hover {
        background: rgb(219, 219, 219); /* Cor ao passar o mouse */
        z-index: 1;
        transition: 300ms; /* Tempo para esmaecer */
    }
}
}
`