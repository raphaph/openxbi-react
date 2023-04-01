import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const SignInContainer = styled.main<ThemeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
        props.variant === 'light' ? props.theme['bg-home-light'] : props.theme['bg-home-dark']};
       
    padding: 0rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        background: ${(props) =>
        props.variant === 'light' ? props.theme.white : props.theme.black};
        padding: 3rem 5rem;
        margin: 5%;

        border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme["border-light"] : props.theme["border-dark"]};
        border-radius: 5px;

        box-shadow: 0 0 20px 2px ${(props) =>
        props.variant === 'light' ? props.theme["border-light"] : props.theme.offblack};
    }

    button:nth-child(4) {
        background: #0061eb;
        color: white;
    }

    button:nth-child(5) {
        background: ${props => props.theme["bg-gray"]};
        color: white;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        cursor: pointer;
        border: 0;
        border-radius: 6px;
        border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme["border-light"] : props.theme["border-dark"]};

        margin-top: 1rem;
        padding: .5rem;
        transition: 300ms ease-out;

        &:hover {
            transform: scale(1.06);
        }
    }

    h2 {
        margin: 1rem 0;
    }

    img {
        margin: 1rem 0;
    }

    p {
        text-align: center;
        margin: 1rem;
        font-size: 1rem;
    }   
    
`