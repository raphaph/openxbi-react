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
  max-width: 800px;

  display: flex;
  justify-content: space-between;
`

export const ContactInfo = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    font-weight: bold;
    
    transition: all 300ms;

    &:hover {
      transform: scale(1.2);
      text-shadow: 0 0 1px;
    }

    &:hover > svg {
      filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 0.4));
    }
  }

  
`

export const RightSideContent = styled.div<ThemeProps>`
  button {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;

    border: 0;
    background: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.offwhite};

    a {
      text-decoration: none;
      color: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.black};
    }
    
    transition: all 300ms;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 4px 1px;
    }
  }
`
