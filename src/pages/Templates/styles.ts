import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const TemplatesContainer = styled.main<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 11rem;

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
  
  transition: background 300ms;
  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};

  z-index: 1;
`

export const TemplatesContents = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const HearderTemplate = styled.header<ThemeProps>`
  --gradient-bg: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.offblack};
  
  background: ${props => props.theme['linear-card-dark']};
  padding: 2rem;
  
  p {
    margin-top: .6rem;
  }

  width: 100%;
`

export const TemplatesMap = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0.5rem;

  @media (max-width: 700px) {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

  max-width: 1200px;
  width: 100%;

  align-items: center;
  justify-content: center;
`

export const CardMap = styled.div<ThemeProps>`
  display:flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  background: ${props => props.theme['linear-card-dark']};
  border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
  border-radius: 6px;

  img {
    cursor: pointer;
    width: 540px;
    box-shadow: 0 0 2px 1px #aaaaaa;
    border-radius: 6px;
    transition: all 500ms;    

    &:hover {
      transform: scale(1.5);
    }
  }

  @media (max-width: 800px) {
    img {
      width: 400px;
    }
    
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95%;

  margin-top: .6rem;

  strong {
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    transition: all 0.3s;
    font-weight: 500;
    width: 115px;
    padding: 0.5rem;
    background: ${(props) => props.theme['strong-orange']};

    a {
      text-decoration: none;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:hover {
      background: white;
      box-shadow: 0 0 5px 1px ${(props) => props.theme['strong-orange']};
    }

    &:active {
      opacity: 1;
      transform: scale(0.97);
      box-shadow: 0 0 7px 1px ${(props) => props.theme['strong-orange']};
    }
  }
`