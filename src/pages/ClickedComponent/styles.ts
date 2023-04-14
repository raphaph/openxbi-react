import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const ClickedBodyContainer = styled.main<ThemeProps>`
  display: flex;

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
  margin: 2rem .2rem 0 2rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme['linear-card-dark']};

    width: 25rem;
    height: 25rem;
    border-radius: 6px 6px 0 0;

  }

  p {
    transition: 300ms;
    font-size: 0.875rem;
    padding: 0.8rem;
    background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
    border-radius: 6px;
  }
`

export const CreatorInfoLike = styled.article<ThemeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 400px;
    width: 100%;
    transition: 300ms;
    
    background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
    padding: .2rem 1rem .2rem .6rem;
    border-radius: 0 0 6px 6px;

    section {
      display: flex;
      align-items: center;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      background: none;
      border: none;
      outline: 0;
      color: inherit;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #ff8c00;
      margin: .2rem;
      margin-right: .8rem;
    }

    a {
      text-decoration: none;
      color: inherit;
      font-size: 1.2rem;
      font-weight: 600;
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
        color: ${(props) => props.theme.secondary};
      }
    }
  }

  padding: 2rem 1rem;
`

export const SyntaxHighlighterStyle = styled(SyntaxHighlighter) <ThemeProps>`
  width: 100%;
  transition: 300ms;
  background: ${(props) =>
    props.variant === 'light' ? props.theme['slate-gray-1'] : props.theme.offblack} !important;

  border: 1px solid ${props => props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

  span {
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
  }  

  max-height: 600px;

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

  @media (max-width: 700px) {
    max-width: 460px;
    width: 100%;
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
  transition: 300ms;
  background: ${(props) =>
    props.variant === 'light' ? props.theme['gray-200'] : props.theme.offblack} !important;

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