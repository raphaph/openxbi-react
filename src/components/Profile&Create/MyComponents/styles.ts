import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const MyComponentsArea = styled.div<ThemeProps>`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 1.7rem;
    }
    
    h3 {
        margin-bottom: .5rem;
    }

    height: 100%;
    border-bottom: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme["border-light"] : props.theme["border-dark"]};
`

export const MyComponentsContainer = styled.main`
    margin: 2rem 0 15rem 2rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        
        div:nth-child(2) {
            margin-top: 1rem;
        }
    }


`

export const NoComponent = styled.div`
    display: flex;
    align-items: center;

    h4 {
        padding: 1rem;
        margin: .5rem;
        background: rgba(50,50,50,0.1);
        border-radius: 8px;
        font-size: .9rem;
    }

    a {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: 50px;
        border: 0;
        color: white;
        background-color: black;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.2px;
        text-decoration: none;
        transition: all .5s ease;
        width: 130px;
        height: 45px;
        font-size: 1rem;

        transition: 300ms;

        &:hover {
            background-color: hsl(261deg 80% 48%);
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(93 24 220) 0px 0px 22px 0px;

        }
        
        &:active {
            background-color: black;
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
            transform: translateY(2px);
            transition: 100ms;
        }

        svg {
            margin-right: .5rem;
        }
        
    }
`

export const FooterMyComponent = styled.div`
    display: flex;
    width: 25rem;
    margin: .5rem 0;

    button {
        cursor: pointer;
        color: white;
        border: 0;
        border-radius: 6px;
        margin: 0 .3rem;
        height: 40px;
        transition: 300ms;
    }

    button:first-child {
        width: 80%;
        background: ${props => props.theme.secondary};
        border: 1px solid ${props => props.theme.secondary};
    }

    button:last-child {
        width: 20%;
        background-color: #C92214;
        border: 1px solid #C92214;
    }

    
    button:hover {
        background: ${props => props.theme.white};
        color: black;
    }
    
    button:active {
        transform: scale(0.98);
    }
`