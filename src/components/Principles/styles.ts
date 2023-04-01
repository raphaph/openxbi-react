import styled from 'styled-components'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const PrinciplesContainer = styled.main<ThemeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: linear-gradient(
                -15deg,
                rgba(52, 22, 227, 0.1) 60%,
                rgba(255, 140, 0, 0.2)) 40%;

    padding: 6rem .5rem 8rem .5rem;

    border-top: 1px solid
    ${(props) =>
        props.variant === 'light'
            ? props.theme['border-light']
            : props.theme['border-dark']};

    main {
        max-width: 1500px;
        width: 100%;
    }
`
export const PrinciplesTitle = styled.div`
    margin-bottom: 2rem ;
    h2 {
        margin: 1rem 0;
        color: ${props => props.theme['strong-orange']}
    }

    p {
        margin: 1rem 0;
        line-height: 1.6;
    }

`

export const PrinciplesContent = styled.div<ThemeProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    
    @media (max-width: 700px) {
        display: flex;
        flex-wrap: wrap;
    }

    div {
        cursor: pointer;
        background: ${(props) =>
        props.variant === 'light' ? props.theme.white : props.theme.black};
    
        transition: 300ms;
        padding: 2rem;
        border-radius: 6px;
        border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

        h3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: .2rem;
        }
        
        p {
            line-height: 1.6;
        }
        
        &:hover {
            transform: scale(1.05);
        }
    }
`
