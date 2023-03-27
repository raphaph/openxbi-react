import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const PrinciplesContainer = styled.main`
    display: flex;
    margin-bottom: 8rem;
    flex-direction: column;

    max-width: 1300px;
    width: 100%;
`
export const PrinciplesTitle = styled.div`
    margin-bottom: 2rem ;
    h2 {
        margin: 1rem 0;
        color: ${props => props.theme["strong-orange"]}
    }

    p {
        margin: 1rem 0;
    }

`

export const PrinciplesContent = styled.div<ThemeProps>`
    display: flex;
    flex-wrap: wrap;
    

    div {
        cursor: pointer;
        max-width: 360px;
        margin: 2rem 1.5rem 0 0;
        background: ${props => props.theme["linear-card-dark"]};
    
        transition: 300ms;
        padding: 2rem;
        border-radius: 6px;

        h3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
        
        &:hover {
            transform: scale(1.05);
        }
    }
`
