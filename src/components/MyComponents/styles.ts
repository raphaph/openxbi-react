import styled from "styled-components";


export const MyComponentsContainer = styled.main`
    margin: 2rem 0 15rem 2rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    h3 {
        margin-bottom: .5rem;
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