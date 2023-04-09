import styled from 'styled-components'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const NavigationContainer = styled.aside<ThemeProps>`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    border-radius: 0 6px 6px 0;
    margin-top: 0.8rem;
    position: fixed;
    
    background: ${props => props.variant === 'light' ? props.theme['slate-gray-1'] : props.theme.offblack};

    @media (max-width: 700px) {
        position: relative;
    }

    nav {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        transition: 300ms;

        a {
            margin: .4rem .1rem;
            padding: .5rem 1rem;
            color: inherit;
            text-decoration: none;
            border-radius: 6px;
            transition: all 300ms;
            background: transparent;

            &:hover {
                background: linear-gradient(
                -15deg,
                rgba(52, 22, 227, 0.1),
                rgba(41, 171, 226, 0.1)
                );
            }

            &.active {
                background: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
                color: ${props => props.variant === 'light' ? props.theme.white : props.theme.black};
                font-weight: bold;
            }
        }
    }
`

