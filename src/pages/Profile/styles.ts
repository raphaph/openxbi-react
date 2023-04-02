import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const ProfileContainer = styled.div<ThemeProps>`
    display: flex;
    height: auto;
    background: ${(props) =>
        props.variant === 'light' ? props.theme['bg-home-light'] : props.theme['bg-home-dark']};
    
        
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`

export const LeftSideProfileAvatar = styled.div`
    margin: 2rem 2rem 0 2rem;

    img {
        border-radius: 8px;
        box-shadow: 0 0 1px 2px ${props => props.theme.primary};
    }

    h3 {
        margin-top: .5rem;
        margin-bottom: .3rem;
        color: ${props => props.theme.primary};
    }

    p {
        font-size: 0.775rem;
        margin-bottom: 1rem;
    }

    strong {
        font-size: 1rem;
        
    }    
`
export const RightSideProfileFavorites = styled.main<ThemeProps>`
    height: 90%;
    width: 100%;
      
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: ${props => props.variant === 'light' ? props.theme.white : props.theme.black};
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