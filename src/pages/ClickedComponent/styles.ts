import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const ClickedBodyContainer = styled.main<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};

  border-top: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};
  
  border-bottom: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};

  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('src/assets/mesh.svg');
    z-index: -1;
    opacity: 0.2;
    /* Aplica um filtro de desfoque */
  }
`

export const ClickedMainContent = styled.div<ThemeProps>`
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export const SingleComponentContainer = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 2rem 2rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      -15deg,
      rgba(52, 22, 227, 0.1),
      rgba(255, 140, 0, 0.1),
      rgba(41, 171, 226, 0.1)
    );

    width: 25rem;
    height: 25rem;
    border-radius: 6px;
  }
`
export const SyntaxContainer = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      cursor: pointer;
      color: inherit;
      background: transparent;
      border: 0;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        color: ${(props) => props.theme['blue-emerald']};
      }
    }
  }

  padding: 2rem 1rem 0 1rem;
`

export const SyntaxHighlighterStyle = styled(SyntaxHighlighter)<ThemeProps>`
  width: 100%;

  @media (max-width: 700px) {
    width: 450px;
  }
  
  height: 400px;

  background: ${(props) =>
    props.variant === 'light'
      ? props.theme.white
      : props.theme.offblack} !important;

  border-radius: 10px 0 0 10px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1345px;
  width: 100%;
`

export const DetailsSupport = styled.details`
  margin: 2rem 2rem 10rem 2rem;

  summary {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    width: 180px;
  }

  div {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  code {
    padding: 0.2rem;

    color: ${(props) => props.theme.white};
    font-weight: bold;
    background: rgba(222, 111, 22, 0.55);

    border-radius: 3px;
  }
`

export const SupportButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  button {
    cursor: pointer;
    margin: 0.5rem 0;
    padding: 0.2rem;

    width: 7rem;
    height: 2rem;
    border: 0;

    background: ${(props) => props.theme['strong-orange']};
    color: ${(props) => props.theme.black};

    font-size: 0.875rem;
    border-radius: 6px;

    transition: 0.4s;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      transform: scale(1.05);
      transition: 0.3s ease-in;
      opacity: 1;
    }
  }
`
