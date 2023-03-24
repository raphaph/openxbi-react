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
      margin-left: .4rem;
      margin-top: .5rem;

      a {
        text-decoration: underline;
        color: inherit;
      }
    }
  }
`

export const FilterSection = styled.section<ThemeProps>`
  margin-left: .4rem;
  margin-top: 1rem;

  max-width: 500px;
  width: 100%;

  --gradient-bg: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.offblack};
  padding: .6rem;
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
        background:  linear-gradient(-15deg, #19d0ff, #29b0e3);
        box-shadow: 0 0 5px 0px #19d0ff;
      }
    }

    input[type="radio"]:nth-child(3) {
      &:checked ~ label:nth-child(4) {
        background:  linear-gradient(-15deg, #19d0ff, #29b0e3);
        box-shadow: 0 0 5px 0px #19d0ff;          
      }
    }

    input[type="radio"]:nth-child(5) {
      &:checked ~ label:nth-child(6) {
        background:  linear-gradient(-15deg, #19d0ff, #29b0e3);
        box-shadow: 0 0 5px 0px #19d0ff;            
      }
    }
    
    input[type="radio"]:nth-child(7) {
      &:checked ~ label:nth-child(8) {
        background:  linear-gradient(-15deg, #19d0ff, #29b0e3);
        box-shadow: 0 0 5px 0px #19d0ff;  
      }
    }
  }
`

export const ComponentsContainer = styled.div<ThemeProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 2rem;
  padding-bottom: 10rem;

  @media (max-width: 1400px) {
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    display: flex;
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

    background: linear-gradient(
      -15deg,
      rgba(52, 22, 227, 0.1),
      rgba(255, 140, 0, 0.1),
      rgba(41, 171, 226, 0.1)
    );

    min-width: 25rem;
    width: 100%;
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
