import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const ProfileContainer = styled.div<ThemeProps>`
    display: flex;
    flex-direction: column;
    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme.offblack};
        
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
    

    nav {
        padding: 2rem;
        
        border-bottom: 2px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
        background: ${props => props.variant === 'light' ? 'linear-gradient(rgba(0,0,0,0), rgba(235,235,235))' : 'linear-gradient(rgba(0,0,0,0), rgba(10,10,10))'};
        
        a {
            text-decoration: none;
            color:  ${props => props.variant === 'light' ? props.theme["gray-600"] : props.theme["gray-500"]};
            margin: 1rem;
            padding: .5rem 1rem;
            font-weight: 500;
            font-size: 18px;
            border-radius: 8px;
            transition: 300ms;

            &:hover {
                color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
                
            }
            
            &.active {
                background: ${props => props.variant === 'light' ? props.theme.white : props.theme.black};
                color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
                border: 1px solid ${(props) => props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
                font-weight: 700;
            }  
        }

        /* a:nth-child(2) {
            text-decoration: none;
            color:  white;
            background: #3e00b6;
            margin: 1rem;
            padding: .5rem;
            font-weight: 500;
            border-radius: 8px;
            transition: 300ms;

            &:hover {
                color: ${props => props.theme.black};
                background: white;
            }
            
            &.active {
                background: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
                color: ${props => props.variant === 'light' ? props.theme.white : props.theme.black};
            }
            
        } */
    }
`

export const LeftSideProfileAvatar = styled.div<ThemeProps>`
    display: flex;

    @media (max-width: 700px) {
        width: 100%;
    }

    padding: 1rem;
    margin: 1rem;
    width: 400px;

    border-radius: 8px;

    img {
        width: 110px;
        height: 110px;
        border-radius: 8px;
    }

    h2 {
        margin: .4rem .8rem;
    }

    p {
        font-size: 1rem;
        margin: .4rem .8rem;
        font-weight: 600;
    }

    strong {
        font-size: 1rem;
    }    
`
export const RightSideProfileFavorites = styled.main<ThemeProps>`
    height: 90%;
    width: 20px;
      
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 2rem 2rem 4rem 2rem;
        height: 700px;
        border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
        border-radius: 10px;

        

        p {
            margin: 2rem 0;
            text-align: center;
        }

        svg {
            position: absolute;
            animation: heartBeat 2s infinite;
            transform: translateY(80px);
        }

        @keyframes heartBeat {
            0% { 
                fill: white; 
                width: 80px; 
                height: 80px; 
                filter: drop-shadow(0 0 1px);
            }
        }
    }
`