import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

interface LanguageSelect {
    language?: 'html' | 'css' | null
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
    width: 96%;
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
        display: flex;
        align-items: center;
        justify-content: center;
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

        p {
            margin-left: .5rem;
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
        margin: .8rem 0;
        font-size: 0.875rem;
    }
`

export const PreviewTitle = styled.div`
    
    strong {
        font-size: 1.2rem;
        line-height: 2;
    }
`

export const NecklaceContainer = styled.div`
    padding: .5rem;
    margin-left: .2rem;
    border-radius: 8px;
`

export const ButtonNecklace = styled.div<LanguageSelect>`
    display: flex;
    width: 100%;
    margin-bottom: .4rem;
    
    strong {
        font-size: 19.2px;
        margin-right: 1rem;
    }

    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 0;
        width: 90px;
        background-color: transparent;
        color: ${props => props.theme["gray-500"]};
        transition: 300ms;
        
        
        &:hover {
            color: inherit;
        }

        p {
            margin-left: .2rem;
        }
    }

    button:nth-child(2) {
        font-weight: ${props => props.language === 'html' ? 600 : 500};
        color: ${props => props.language === 'html' ? 'inherit' : null};
    }

    button:nth-child(3) {
        font-weight: ${props => props.language === 'css' ? 600 : 500};
        color: ${props => props.language === 'css' ? 'inherit' : null};
    }
`

export const LanguageContents = styled.div<ThemeProps>`
    padding: 1rem;
    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme["gray-900"]};
    font-size: .875rem;
    line-height: 1.8;
    margin-top: .4rem;
    border-radius: 8px;
    border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
      
    code {
        color: #AA2200;
    }

    strong {
        color: #ff8c00;
        font-weight: 500;
    }
    
`