import styled from 'styled-components'


export const NavigationContainer = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    border-radius: 0 6px 6px 0;

    position: fixed;
    top: 7.6rem;

    background: ${props => props.theme['linear-card-dark']};

    @media (max-width: 700px) {
        position: relative;
    }

    nav {
        display: flex;
        flex-direction: column;
        margin: 1rem 0 2rem;
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
                background: linear-gradient(
                -15deg,
                rgba(52, 22, 227, 0.1),
                rgba(255, 140, 0, 0.1));
                
                color: ${props => props.theme.primary};
                font-weight: bold;

            }
        }
    }
`

