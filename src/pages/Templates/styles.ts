import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const FrameContainer = styled.main<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 6rem;

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

  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};

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

  iframe {
    border-radius: 10px;
    margin: 1rem;
    width: 1200px;
    height: 720px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  small {
    text-shadow: 0 0 2px white;
  }
`

export const HeaderFrame = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;

  margin: 2rem 0 0 0;

  button {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    transition: all 0.3s;

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
  }
`
