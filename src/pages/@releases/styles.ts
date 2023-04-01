import styled from 'styled-components'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const ReleasesContainer = styled.main<ThemeProps>`
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

export const ReleasesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    max-width: 1200px;
    width: 100%;    
`

export const ReleasesText = styled.div`
    max-width: 900px;
    width: 100%;
    padding: 3.5rem 2rem;
    margin-bottom: 20rem;

    h1 {
        margin-bottom: .6rem;
    }

    strong {
        color: ${props => props.theme.primary}
    }

    p {
        margin-top: 2rem;
        line-height: 1.8;
        font-size: 1rem;
        font-weight: 600;
    }

    h2 {
        margin-top: 4rem;
    }

    ul {
        margin: 1rem;

        li {
            margin: 1rem 0;
        }
    }

`