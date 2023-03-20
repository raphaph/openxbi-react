import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const HeaderContainer = styled.header<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  transition: background 300ms;
  z-index: 2;
  height: 100px;
  width: 100%;
  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};  

  a {
    img {
    height: 2.5rem;
    margin-left: 1.5rem;
  }
  }
  

  @media (max-width: 800px) {
    a {
      img {
        width: 0;
      }
    }
  }
`

export const HeaderSideRight = styled.div`
  display: flex;
  align-items: center;

  nav {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;

    padding: 2.45rem 0;

    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    color: ${(props) => props.theme['gray-500']};
    gap: 1rem;

    &:hover {
      color: inherit;
      transition: 300ms;
    }

    &.active {
      color: ${(props) => props.theme.primary};
      font-weight: 500;
      text-shadow: 0 0 2px;
      border-top: 2px solid transparent;
      border-bottom: 2px solid ${(props) => props.theme.primary};
    }
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
    margin: 0 2rem;
    line-height: 0;
  }
`

export const SeparatorRightSide = styled.div<ThemeProps>`
  content: '';
  height: 4rem;
  width: 1px;
  background-color: ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};
  color: transparent;
`
