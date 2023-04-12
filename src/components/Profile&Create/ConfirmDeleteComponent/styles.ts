import styled from 'styled-components'

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const ModalContainerDeletion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    height: 100vh;

    background: rgba(55,50,55,0.1);

    color: white;
    z-index: 3;
`

export const ModalDeleteContent = styled.div<ThemeProps>`
    padding: 2rem;
    background: ${props => props.variant === 'light' ? props.theme.white : props.theme.offblack};
    color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white};
    box-shadow: 0 0 2px 1px rgba(55,55,55,0.1);

    p {
        text-align: center;
        
        font-weight: 600;
    }

    small {
        margin: 1rem;
        color: red;
    }

    border-radius: 6px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {     
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            
            width: 100px;
            
            margin: 0 .5rem;
            padding: .2rem;
            border: 0;

            border-radius: 6px;
        }

        button:first-child {
            background-color: green;
            color: white
        }

        button:last-child {
            background-color: red;
            color: white;
        }

        button:hover {
            opacity: 0.7;
            transform: 0.98;
        }
    }

    animation: fade 500ms forwards;

    @keyframes fade {
        0% {  opacity: 0 }
        100% {  opacity: 1 }
    }

`