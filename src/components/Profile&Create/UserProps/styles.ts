import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const ProfileContainer = styled.div<ThemeProps>`
    display: flex;
    
    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme.offblack};
        
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }

    border-bottom: 2px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
        background: ${props => props.variant === 'light' ? 'linear-gradient(rgb(245, 245, 245), rgba(233,233,233,1))' : 'linear-gradient(rgba(5,5,6,1), rgba(12,12,12,1))'};
    

    
`

export const LeftSideProfileAvatar = styled.div<ThemeProps>`
    display: flex;
    align-items: center;
    width: auto;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }

    padding: 1rem;
    margin: 1rem;

    border-radius: 8px;

    div {
        width: auto;

        svg {
            fill: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
            margin-left: .4rem;
            transform: translateY(2px);
        }
    }

    img {
        width: 110px;
        height: 110px;
        border-radius: 8px;
    }

    h2 {
        margin: .4rem .8rem;
    }

    p {
        margin: .7rem .8rem;
        font-weight: 500;
    }

    

    strong {
        font-size: 1rem;
    }    

    nav {
        
        width: auto;
        
             
        a {
            display: flex;
            justify-content: left;
            align-items: center;

            text-decoration: none;
            color:  ${props => props.variant === 'light' ? props.theme["gray-600"] : props.theme["gray-500"]};
            margin: 1rem;
            padding: .5rem 1rem;
            font-weight: 500;
            font-size: 1rem;
            border-radius: 8px;
            transition: 300ms;
            background: rgba(100,110,110,.1);

            &:hover {
                color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
                
            }
            
            &.active {
                background: ${props => props.variant === 'light' ? props.theme.black : props.theme.secondary};
                color: ${props => props.theme.white};
                border: 1px solid ${(props) => props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
                font-weight: 500;
            }  
        }

        svg {
            margin-right: .5rem;
        }

        
    }
`