import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const CodeAreaContainer = styled.main<ThemeProps>`    
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    background: ${(props) =>
        props.variant === 'light' ? props.theme.white : props.theme.offblack};
    
`

export const CodingContainerStyle = styled.div`
    display: flex;
    
    @media (max-width: 700px) {
        flex-direction: column;
    }

    margin: 0 2rem 0 2rem;
    height: auto;
    width: 90%;
`

export const PreviewContainer = styled.div`
`

export const CodingStyle = styled.div<ThemeProps>`

    padding: .5rem;
    background: ${props => props.theme['linear-card-dark']};
    border-radius: 11px;
    width: 800px;
    height: auto;
    border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
        

    div {
        font-family: 'Fira Code';
        background: transparent;
        line-height: 1.6;
        

        &::-webkit-scrollbar {
            width: .4rem;
            height: .4rem;
        }

        &::-webkit-scrollbar-track {
            background: #00000010;
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme['linear-card-dark']};
            border-radius: 5px;
        }
        
    }

    .ace_content {
        background: transparent;

        &::-webkit-scrollbar {
            width: .6rem;
        }

        &::-webkit-scrollbar-track {
            background: black;
        }

        &::-webkit-scrollbar-thumb {
            background: black;
        }
    }
    .ace_print-margin {
        width: 0;
    }
    

    .ace_gutter {
        background: rgba(0, 0, 0, 0.05);
        border-top-left-radius: 6px;
        
    }

    .ace_active-line {
        background: rgba(0, 0, 0, 0.05);
    }
        
    .ace_gutter-cell  {
        background: none;
        margin: 0;
    }
`



export const PreviewFooter = styled.div`
    button {
        cursor: not-allowed;
        
        width: 25rem;
        
        background: ${props => props.theme.secondary};
        color: white;
        
        margin: 1rem 0;
        padding: .8rem;
        
        border-radius: 8px;
        border: 1px solid ${props => props.theme.secondary};

        &:hover {
            background: white;
            color: black;
            transform: scale(0.98);
            transition: 300ms;
        }
    }
`

export const CodingSyntax = styled.div`
    margin-left: 1rem;

    @media (max-width: 700px) {
        margin-left: 0;
    }

    strong {
        font-size: 1.2rem;
        line-height: 2;
    }
    
    p {
        margin-top: .5rem;
 
        font-size: 0.875rem;
    }
`

export const PreviewTitle = styled.div`
    
    strong {
        font-size: 1.2rem;
        line-height: 2;
    }
`