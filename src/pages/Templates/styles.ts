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
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};

  z-index: 1;

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

export const TemplatesContents = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;

  margin: 2rem 0 0 0;

`

export const HearderTemplate = styled.header<ThemeProps>`
  --gradient-bg: ${(props) =>
    props.variant === 'light' ? props.theme['gray-100'] : props.theme.offblack};
  padding: 1rem;
  border-radius: 6px;
  background: linear-gradient(45deg, var(--gradient-bg) 20%, rgba(214,40,0,0.01)) ;
  
  p {
    margin-top: .6rem;
  }
`

export const TemplatesMap = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;
`

export const CardMap = styled.div`

  padding: 1rem;
  margin: 2rem .5rem 0 0;
  background: linear-gradient(
      -15deg,
      rgba(52, 22, 227, 0.1),
      rgba(255, 140, 0, 0.1),
      rgba(41, 171, 226, 0.1)
    );  border-radius: 6px;

  img {
    cursor: pointer;
    width: 550px;
    box-shadow: 0 0 2px 1px #aaaaaa;
    border-radius: 6px;
    transition: all 500ms;

    &:hover {
      transform: scale(1.5);
    }
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: .6rem;

  strong {
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    transition: all 0.3s;

    a {
      display: flex;
      align-items: center;
      width: 100px;
      justify-content: space-between;
      text-decoration: none;
      color: black;
    }

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