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

export const HeaderCoding = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div {
        display: flex;
        align-items: center;

        p {
            font-size: 1rem;
            margin: 0;
        }
    }

    select {
        cursor: pointer;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;

        margin-left: 1rem;
        border: 0;
        border-radius: 3px;
    }

`

export const CodingStyle = styled.div<ThemeProps>`
    margin-bottom: .8rem;
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
            width: .7rem;
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

export const PreviewFooter = styled.div<ThemeProps>`

    width: 25rem;

    p {
        font-size: .875rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        width: 25rem;
        
        background: ${props => props.theme.secondary};
        color: white;
        
        margin: .6rem 0;
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
            font-size: 1rem;
        }
    }

    
`

export const InputNameComponent = styled.div<ThemeProps>`
    display: flex;
    
    div {
        select {
            z-index: 1;
            cursor: pointer;
            position: absolute;
            
            background: transparent;
            border: 0;
            
            transform: translateY(16px);
            margin-left: .4rem;
            
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            
            option {
                
                background-color: white;
            }
        }

        input[type="text"] {
            border: 0;
            z-index: 0;
            width: 25rem;
            height: 40px;
            
            padding: .2rem .4rem .2rem 4.7rem; 
            margin-top: .5rem;
            margin-bottom: .4rem;
            
            background: ${props => props.theme.white};
            border: 1px solid ${(props) =>
        props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
            border-radius: 6px;
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
    margin-left: .5rem;
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

    button:nth-child(1) {
        font-weight: ${props => props.language === 'html' ? 600 : 500};
        color: ${props => props.language === 'html' ? 'inherit' : null};
    }

    button:nth-child(2) {
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

export const SaveConfirmContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
    margin-bottom: .7rem;
    color: green;
    font-weight: 600;

    span {
        margin-left: .7rem;
        color: green !important;
    }

    transform: translateY(-20px);

    animation: show 300ms forwards;

    @keyframes show {
        0% {transform: translateY(-30px); opacity: 0}
        50% {transform: translateY(10px)}
        100% {transform: translateY(0px); opacity: 1}
    }
`