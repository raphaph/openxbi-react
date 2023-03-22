import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const IteratingDaxContainer = styled.main<ThemeProps>`
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

export const IterationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1200px;
    width: 100%;
`

export const IteratingText = styled.div`
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