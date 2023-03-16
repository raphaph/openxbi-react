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
  transition: background 300ms;

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
  align-items: flex-start;
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
    margin-bottom: .5rem;

  }

  p {
    font-size: 0.875rem;
    padding: 0.8rem;
    background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
    border-radius: 6px;
  }
`

export const CreatorInfoImg = styled.article<ThemeProps>`
    display: flex;
    align-items: center;
    margin: .5rem 0;
    width: 100%;
    
    left: 11px;
    background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
    padding: .2rem .4rem;
    border-radius: 6px;

    img {
      width: 40px;
      border-radius: 50%;
      margin: .2rem;
      margin-right: .8rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
`


export const SyntaxContainer = styled.div`
  max-width: 1000px;
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

  padding: 2rem 1rem;
`

export const SyntaxHighlighterStyle = styled(SyntaxHighlighter) <ThemeProps>`
  width: 100%;

  span {
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
  }

  @media (max-width: 700px) {
    width: 450px;
  }

  max-height: 600px;

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

export const DetailsSupport = styled.div`
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

`

export const SupportButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  button {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: space-between;
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    transition: all 0.2s;

    margin-top: 0.7rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['strong-orange']};

    &:hover {
      opacity: 0.7;
      box-shadow: 0 0 5px 1px ${(props) => props.theme['strong-orange']};
    }

    &:active {
      opacity: 1;
      transform: scale(0.97);
      box-shadow: 0 0 7px 1px ${(props) => props.theme['strong-orange']};
    }

    a {
      display: flex;
      align-items: center;
      width: 185px;
      justify-content: space-between;
      text-decoration: none;
      color: black;
    }
  }
`

export const SyntaxHighlighterHowToUse = styled(SyntaxHighlighter) <ThemeProps>`
  width: 100%;
  
  span {
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
  }

  border-radius: 6px;
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