import styled from "styled-components";

export const CreateComponentHomeContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 4rem 0 0 0;
    }
    
    div {
        display: flex;
        
        @media (max-width: 700px) {
            flex-direction: column;
        }
    }

    
`