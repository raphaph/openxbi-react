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
      width: 10rem;
      margin-left: 1.5rem;
      filter: ${props => props.variant === 'light' ? 'drop-shadow(0px 0px 5px rgba(0,0,0,0.05))' : 'drop-shadow(0px 0px 5px rgba(255,255,255,0.05))'} blur(0.30px);

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

export const HeaderSideRight = styled.div<ThemeProps>`
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
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme['gray-500']};
      
      &:hover {
        color: inherit;
        transition: 300ms;
    }

    svg {
        margin-right: .4rem;
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
  margin-right: 1.6rem;

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
    margin: 0 .4rem 0 0 ;
    padding: .2rem;
    transition: 300ms;
    border-radius: 6px;

    &:hover {
      background: rgba(155,155,155,0.2);
    }
  }

  strong {
    margin-right: 1rem;
  }

  img {
    margin: 0;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.primary};
  }

`

export const ProfileModal = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: 300ms;

  width: auto;
  
  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['gray-900']};

  border: 1px solid ${(props) =>
    props.variant === 'light' ? props.theme['border-light'] : props.theme['border-dark']};
  border-radius: 6px;  

  right: 0;
  top: 80px;
  
  margin: 1rem;
  padding: 1rem;

  a:first-child {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 50px;
    border: 0;
    color: white;
    background-color: black;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.2px;
    text-decoration: none;
    transition: all .5s ease;
    width: 118px;
    height: 40px;
    font-size: .95rem;

    transition: 300ms;

    &:hover {
      background-color: hsl(261deg 80% 48%);
      color: hsl(0, 0%, 100%);
      box-shadow: rgb(93 24 220) 0px 0px 22px 0px;
    }

    &:active {
      background-color: black;
      color: hsl(0, 0%, 100%);
      box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
      transform: translateY(2px);
      transition: 100ms;
   }

   svg {
            margin-right: .5rem;
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