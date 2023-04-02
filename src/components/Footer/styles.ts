import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const FooterContainer = styled.footer<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 2;

  height: 18rem;
  padding: 2rem 1rem;

  

  p {
    color: ${(props) => props.theme['gray-500']};
    font-size: 13px;
  }
`

export const FooterContents = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`

export const ContactInfo = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;

  strong {
    margin: 0.5rem 0;
  }

  svg {
    height: 25px;
    margin-right: .2rem;
    fill: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.white};
    border-radius: 6px;
  }

  a {
    color: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.white};
    text-decoration: none;

    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 400;
    
    transition: all 300ms;

    &:hover {
      transform: scale(1.2);
      text-shadow: 0 0 1px;
      font-weight: 700;
    }

    &:hover > svg {
      filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 0.4));
    }
  }
`
export const FooterMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 0;
    visibility: hidden;
  }

  a {
    display: flex;
    align-items: center;
    margin: 1rem;
    text-decoration: none;
    color: inherit;
    font-weight: 600;

    svg {
      margin-left: .2rem;
    }

    &:hover {
      color: ${props => props.theme['strong-orange']};
      transition: 300ms;
    }
  }
`

export const RightSideContent = styled.div<ThemeProps>`
  button {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;

    a {
      text-decoration: none;
    } 

    color: black;

    transition: all 300ms;
    cursor: pointer;
    
    border: 0;
    background:  ${props => props.theme.primary};
   
    
    &:hover {
      transform: scale(0.98);
      background: white;
      box-shadow: 0 0 2px 1px ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
    }
  }

    
`
