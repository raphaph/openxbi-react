import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const IntroductionContainer = styled.main<ThemeProps>`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }

    background: ${(props) =>
        props.variant === 'light' ? props.theme.offwhite : props.theme.black};
    transition: background 300ms;

    border-bottom: 1px solid
        ${(props) =>
        props.variant === 'light'
            ? props.theme['gray-100']
            : props.theme['gray-900']};

    border-top: 1px solid
        ${(props) =>
        props.variant === 'light'
            ? props.theme['gray-100']
            : props.theme['gray-900']};

`

export const IntroductionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    max-width: 1200px;
    width: 100%;
`

export const IntroText = styled.div`
    max-width: 900px;
    width: 100%;
    padding: 3.5rem 2rem;

    h1 {
        margin-bottom: .6rem;
    }

    strong {
        color: ${props => props.theme.primary}
    }

    p {
        margin-top: 2rem;
        line-height: 1.8;
    }

    h2 {
        margin-top: 4rem;
    }

    a {
        text-decoration: none;

        button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 240px;
            color: white;

            margin: 2rem 0;
            padding: .6rem;
            border: 0;
            border-radius: 20px;
            
            background: ${props => props.theme.secondary};
            transition: all 300ms;
            
            &:hover {
                opacity: 0.8;
                box-shadow: 0 0 5px 1px #777;
                transform: scale(0.98);
            }
        }
    }

    a:last-child {
        
        button {
            background: #0768be;
        }
    }
`