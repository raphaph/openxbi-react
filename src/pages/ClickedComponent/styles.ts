import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from "styled-components";

interface ThemeProps {
    variant?: 'light' | 'dark' | null
  }

export const ClickedBodyContainer = styled.main<ThemeProps>`
  background: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.black};

  border-bottom: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};
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
  padding: 2rem 0 2rem 2rem ;

  h2 {
    margin-bottom: .5rem;
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
        color: ${props => props.theme['blue-emerald']}
      }
    }
  }

  padding: 2rem 1rem 0 1rem;
`

export const SyntaxHighlighterStyle = styled(SyntaxHighlighter)<ThemeProps>`
  max-width: 1600px;
  width: 100%;
  height: 400px;
  font-family: 'JetBrains Mono', monospace !important;

  background: ${(props) =>
      props.variant === 'light'
        ? props.theme.offwhite
        : props.theme.offblack} !important;

  border-radius: 10px 0 0 10px;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
      width: .6rem;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }


  &::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.3);
  }

`

export const ClickedContentSupport = styled.details`
  margin: 2rem 2rem 14rem 2rem;

  summary {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    width: 180px
  }

  div {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  code {
    padding: .2rem;

    color: ${props => props.theme.white};
    font-weight: bold;
    background: rgba(222,111,22,0.55);

    border-radius: 3px;
  }
`

export const SupportButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  
  button {
    cursor: pointer;
    margin: .5rem 0;
    padding: .2rem;
    
    width: 7rem;
    height: 2rem;
    border: 0;


    background: ${props => props.theme['offblack']};
    color: ${props => props.theme.white};

    font-size: 0.875rem;
    border-radius: 6px;

    transition: .4s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(1.05);
      transition: .3s ease-in;
      opacity: 1;
    }
  }
`