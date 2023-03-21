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
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};
  transition: background 300ms;

  z-index: 0;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('src/assets/mesh.svg') no-repeat;
    z-index: -1;
    opacity: 0.2;
    /* Aplica um filtro de desfoque */
  }
`

export const HeaderContentsContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 1800px;
  width: 100%;

  div {
    max-width: 1660px;
    width: 100%;
    margin: 2rem;
    text-align: left;

    h2, p {
      margin-left: 1rem;
      margin-top: .5rem;

      a {
        text-decoration: underline;
        color: inherit;
      }
    }
  }
`

export const FilterSection = styled.section<ThemeProps>`
  margin-left: 1rem;
  margin-top: .5rem;

  max-width: 500px;

  --gradient-bg: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.offblack};
  padding: 1rem;
  border-radius: 6px;
  background: linear-gradient(
      -45deg,
      rgba(0,0,0,0.01),
      rgba(52, 22, 227, 0.1),
      rgba(255, 140, 0, 0.1),
      rgba(41, 171, 226, 0.1)
    );
  
  form {

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: .2rem;

    label {
      cursor: pointer;
      border: 2px solid transparent;
      transition: 100ms;
      width: 100px;
      text-align: center;
      font-weight: 500;

      padding: .5rem;
      margin: .2rem;
      border-radius: 10px;
      &:hover {
        background: rgba(200,200,200,0.2);
      }
    }
    
    input[type="radio"]:nth-child(1) {
      width: 0;
      height: 0;
      box-shadow: none;

      &:checked ~ label:nth-child(2) {
        background:  linear-gradient(-15deg, #cc8322 0%, #ffbf29 66%,#fda22a 100%);  
        border: 2px solid ${props => props.variant === 'light' ? props.theme.black : props.theme.white};           
      }
    }

    input[type="radio"]:nth-child(3) {
      width: 0;
      height: 0;
      box-shadow: none;
      
      &:checked ~ label:nth-child(4) {
        background:  linear-gradient(-15deg, #cc8322,#ffbf29,#fda22a);  
        border: 2px solid ${props => props.variant === 'light' ? props.theme.black : props.theme.white};             
      }
    }

    input[type="radio"]:nth-child(5) {
      width: 0;
      height: 0;
      box-shadow: none;

      &:checked ~ label:nth-child(6) {
        background:  linear-gradient(-15deg, #cc8322,#ffbf29,#fda22a);  
        border: 2px solid ${props => props.variant === 'light' ? props.theme.black : props.theme.white};              
      }
    }
    
    input[type="radio"]:nth-child(7) {
      width: 0;
      height: 0;
      box-shadow: none;

      &:checked ~ label:nth-child(8) {
        background:  linear-gradient(-15deg, #cc8322,#ffbf29,#fda22a);  
        border: 2px solid ${props => props.variant === 'light' ? props.theme.black : props.theme.white}; 
      }
    }
  }
  
`

export const ComponentsContainer = styled.div<ThemeProps>`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 2rem;
  padding-bottom: 10rem;

  max-width: 1800px;
  width: 100%;

  main {
    margin: 1rem;
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
    border-radius: 6px 6px 0 0;
  }
`

export const FooterCardContent = styled.footer<ThemeProps>`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 0 0 6px 6px;

  background: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.offblack};

  button {
    cursor: pointer;
    border: 0;
    border-radius: 6px;

    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;

    padding: 0.25rem;

    background: ${(props) =>
    props.variant === 'light' ? props.theme.offblack : props.theme.white};

    color: ${(props) =>
    props.variant === 'light' ? props.theme.white : props.theme.black};

    transition: all 0.3s;

    &:hover {
      transform: scale(0.98);
      transition: all 0.3s;
      box-shadow: 0 0 5px 1px black;
    }

    a {
      text-decoration: none;
      color: inherit;

      display: flex;
      align-items: center;

      p {
        padding-left: 0.3rem;
      }
    }
  }
`
