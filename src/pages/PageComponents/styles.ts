import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const PageComponentsContainer = styled.main<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid
    ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};

  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};
  transition: background 300ms;

  z-index: 0;
  border-bottom: 1px solid
    ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};

`

export const HeaderContentsContainer = styled.header<ThemeProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  

  background: ${props => props.variant === 'light' ? props.theme.offwhite : props.theme.offblack};

  width: 100%;

  div {
    max-width: 1660px;
    width: 100%;
    margin: 2rem;
    text-align: left;

      a {
        text-decoration: underline;
        color: inherit;
      }
    }
`

export const FilterSection = styled.section<ThemeProps>`
  margin-top: 1rem;

  max-width: 500px;
  width: 100%;

  --gradient-bg: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.offblack};
  padding: .6rem;
  border-radius: 6px;
  background: ${(props) =>
    props.variant === 'light' ? props.theme['linear-card-light'] : props.theme['gray-900']};
  
  form {

    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: .1rem;

    label {
      cursor: pointer;
      transition: 300ms;
      width: 90px;
      text-align: center;
      font-weight: 500;

      padding: .5rem;
      margin: .2rem;
      border-radius: 6px;
      &:hover {
        background: rgba(200,200,200,0.2);
        transform: scale(1.05);
      }
    }

    input[type="radio"]:nth-child(odd) {
      width: 0;
      height: 0;
      box-shadow: none;
    }

    input[type="radio"]:nth-child(1) {
      &:checked ~ label:nth-child(2) {
        background:  ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
        box-shadow: 0 0 5px 0px ${props => props.variant === 'light' ? props.theme['strong-orange'] : props.theme['purple-god']};
        color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white}
      }
    }

    input[type="radio"]:nth-child(3) {
      &:checked ~ label:nth-child(4) {
        background:  ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
        box-shadow: 0 0 5px 0px ${props => props.variant === 'light' ? props.theme['strong-orange'] : props.theme['purple-god']};
        color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white}         
      }
    }

    input[type="radio"]:nth-child(5) {
      &:checked ~ label:nth-child(6) {
        background:  ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
        box-shadow: 0 0 5px 0px ${props => props.variant === 'light' ? props.theme['strong-orange'] : props.theme['purple-god']};
        color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white}            
      }
    }
    
    input[type="radio"]:nth-child(7) {
      &:checked ~ label:nth-child(8) {
        background:  ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
        box-shadow: 0 0 5px 0px ${props => props.variant === 'light' ? props.theme['strong-orange'] : props.theme['purple-god']};
        color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white}  
      }
    }
  }
`

export const ComponentsContainer = styled.div<ThemeProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10rem;

  @media (max-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  max-width: 1800px;
  width: 100%;

  main {
    margin: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['gray-000'] : props.theme['gray-800']};
    background: ${props => props.variant === 'light' ? props.theme['slate-gray-1'] : props.theme['gray-900']};

    width: 100%;
    height: 25rem;
    border-radius: 6px;
  }
`

export const FooterCardContent = styled.footer<ThemeProps>`
  display: flex;
  align-items: center;
  height: 43px;

  strong {
    background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};
    border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
    width: 100%;
    margin: 0 .6rem;
    padding: .3rem .6rem;
    height: 32px;
    border-radius: 6px;
  }


  a {
    text-decoration: none;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: black;
      width: 65px;
      margin-right: .6rem;
      border: 0;
      border-radius: 6px;

      padding: 0.25rem;
      color: ${(props) =>
    props.variant === 'light' ? props.theme.black : props.theme.white};
      background: ${(props) =>
    props.variant === 'light' ? props.theme.primary : props.theme.secondary};

      transition: all 0.3s;

      &:hover {
        opacity: 1;
        box-shadow: 0 0 2px 1px ${(props) =>
    props.variant === 'light' ? props.theme.primary : props.theme.secondary};
        background: ${props => props.theme.white};
        color:${(props) =>
    props.variant === 'light' ? props.theme.primary : props.theme.secondary};
      }

      &:active {
        opacity: 1;
        transform: scale(0.97);
        box-shadow: 0 0 7px 1px ${(props) =>
    props.variant === 'light' ? props.theme.primary : props.theme.secondary};
      }
    }
  }
  
`
