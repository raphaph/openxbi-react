import styled from "styled-components";

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
    }

    p {
        margin: 1rem 0;
    }

`

export const PrinciplesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    

    div {
        cursor: pointer;
        max-width: 360px;
        margin: 2rem 1.5rem 0 0;
        background: linear-gradient(
        -15deg,
        rgba(52, 22, 227, 0.1),
        rgba(255, 140, 0, 0.1),
        rgba(41, 171, 226, 0.1)
            );
    
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
