import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}


export const CreateContainer = styled.div<ThemeProps>`
    border-bottom: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme["border-light"] : props.theme["border-dark"]};

    h2 {
        margin: 1.5rem 2rem;
    }

    span {
        color: ${props => props.theme.secondary}
    }
`