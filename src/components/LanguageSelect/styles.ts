import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
}

export const LanguageSelectRadio = styled.form<ThemeProps>`
    @media (max-width: 600px) {
      visibility: hidden;
      width: 0;

    }

    label {
        cursor: pointer;
        color: ${props => props.theme["gray-500"]};
        font-weight: light;
        transition: 100ms;
    }

    label:hover {
        color: inherit;
    }

    input[type="radio"] {
        width: 0;
        margin: 0;
    }

    input[type="radio"]:checked + label {
        color: ${props => props.theme.secondary};
        font-weight: 600;
    }

`