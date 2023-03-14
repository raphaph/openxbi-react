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

    h2 {
      margin-left: 1rem;
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
      transform: scale(1.05);
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
