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
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};  

  a {
    img:nth-child(1) {
      width: 8.5rem;
      margin-left: 1.5rem;
    }

    img:nth-child(2) {
      width: 0;
      margin-left: 1.5rem;
    }
  }
  

  @media (max-width: 800px) {
    a {
      img:nth-child(1) {
        width: 0;
      }
      img:nth-child(2) {
        width: 3rem;
        margin-left: .5rem;
      }
    }
  }
`

export const HeaderSideRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  nav {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;

    @media (max-width: 600px) {
      width: 0;
      visibility: hidden;
    }
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

export const MenuButton = styled.button`
  @media (min-width: 600px) {
    position: absolute;
    visibility: hidden;
    width: 0;
  }
`

export const SunButton = styled.button`
  @media (max-width: 600px) {
    visibility: hidden;
    width: 0;
  }
`

export const MenuVertical = styled.div<ThemeProps>`
  position: absolute;
  top: 110px;
  right: 10px;

  button {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;

    transition: all 300ms;
    cursor: pointer;

    border: 0;
    background:  ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
    color: ${props => props.variant === 'light' ? props.theme.black : props.theme.white}; 
    
    &:hover {
      transform: scale(0.96);
      box-shadow: 0 0 4px 1px ${props => props.variant === 'light' ? props.theme.primary : props.theme.secondary};
    }
  }


  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    background:  ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};  

    width: 200px;

    padding: 1rem;
    gap: 1rem;
    
    border-radius: 6px;
    border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};

    a {
      text-decoration: none;
      color: ${(props) => props.theme['gray-500']};
      
      &:hover {
        color: inherit;
        transition: 300ms;
    }
   }
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

  @media (max-width: 600px) {
      visibility: hidden;
      width: 0;
    }
`

export const SeparatorHorizontal = styled.div<ThemeProps>`
  content: '';
  margin: .5rem 0;
  height: 1px;
  width: auto;
  background-color: ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};
  color: transparent;
`

export const UserAvatarName = styled.div`

  button {
    cursor: pointer;

    display: flex;
    align-items: center;

    color: inherit;
    margin: 0;

    &:hover {
      transform: scale(0.95);
      transition: 300ms;
    }
  }

  strong, img {
    margin-right: 1rem;
  }

  img {
    border-radius: 50%;
    border: 2px solid ${props => props.theme.primary};
  }

`

export const ProfileModal = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: auto;
  
  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};

  border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
  border-radius: 6px;  

  right: 0;
  top: 80px;
  
  margin: 1rem;
  padding: 1rem;

  a:first-child {
    background: ${props => props.theme.secondary};
    color: white;
    padding: .5rem;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 1rem;
    width: 100%;

    &:hover {
      transform: scale(0.95);
      transition: 350ms;
    }
  }

  a:nth-child(2) {
    display: flex;
    align-items: center;
    margin: .7rem 0;
    cursor: pointer;
    border: 0;
    background: none;
    color: #717a8a;
    text-decoration: none;

    p {
      margin-left: .5rem;
    }
    
    &:hover {
      color: inherit;
      transition: 300ms;
    }

  }

  button {
    display: flex;
    align-items: center;
    margin: .7rem 0;
    cursor: pointer;
    border: 0;
    background: none;
    color: #717a8a;
  
    &:hover {
      color: inherit;
      transition: 300ms;
    }
  
  p {
    margin-left: .5rem;
  }
  
  }

  
`