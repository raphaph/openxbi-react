import { createGlobalStyle } from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['blue-turq']};
    }

    body {
        background: ${(props) =>
          props.variant === 'light' ? props.theme.white : props.theme.offblack};
        color: ${(props) =>
          props.variant === 'light' ? props.theme.offblack : props.theme.white};
        
        scroll-behavior: smooth;

        -webkit-font-smoothing: antialiased; 
    }

    body::-webkit-scrollbar {
      width: .6rem;
    }

    body::-webkit-scrollbar-track {
        background: ${(props) =>
          props.variant === 'light' ? props.theme.white : props.theme.offblack};
    }

    body::-webkit-scrollbar-thumb {
      background: ${(props) =>
        props.variant === 'light'
          ? props.theme['gray-300']
          : props.theme['gray-700']};
    }



    // jetBrains/FiraCode for code and Inter for texts
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`
