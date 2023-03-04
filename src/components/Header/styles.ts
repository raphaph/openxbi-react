import styled from 'styled-components'
interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const HeaderContainer = styled.header<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  width: 100%;

  border-bottom: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};

  img {
    height: 2.5rem;
    margin-left: 1.5rem;
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

    color: ${(props) => props.theme['gray-500']};
    border: 1px solid transparent;
    gap: 1rem;

    &.active {
      color: ${(props) => props.theme['blue-turq']};
      font-weight: 500;
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
      : props.theme['gray-600']};
  color: transparent;
`
