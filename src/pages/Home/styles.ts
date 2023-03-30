import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const MainContainer = styled.main<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: auto;
  position: relative;
  background: ${(props) =>
    props.variant === 'light' ? props.theme.offwhite : props.theme['bg-gray']};
  transition: background 300ms;

  background-size: 100%;
  border-bottom: 1px solid
    ${(props) =>
    props.variant === 'light'
      ? props.theme['gray-100']
      : props.theme['gray-900']};
  z-index: 0;
`

export const MainContentOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 2rem;

  width: 100%;
  max-width: 1300px;

  h1 {
    margin: 5rem 0 1rem 0;
    width: 60%;
    text-align: left;
    font-size: 4rem;
    text-shadow: 0px 0px 2px ${(props) => props.theme['gray-500']};

  }

  strong:nth-child(2) {
    color: ${props => props.theme['gray-500']};
    font-weight: 300;
    line-height: 1.5;
  }

  strong {
    font-weight: 600;
    margin-bottom: 2rem;
  }

`

export const CardsMainContentOne = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
                -15deg,
                rgba(52, 22, 227, 0.1) 60%,
                rgba(255, 140, 0, 0.1)) 40%;

    width: 25rem;
    height: 25rem;
    border-radius: 6px;
    transition: 300ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const MainContentTwo = styled.main`
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  p {
    line-height: 1.6;
  }
`

export const ContentTwoCard = styled.div`
  margin-top: 10rem;
  padding-right: 6rem;

  h3 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['strong-orange']};
    text-shadow: 0 0 2px;
  }
`

export const MidContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10rem 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export const MainFooterContent = styled.div`
  margin-bottom: 10rem;
  max-width: 1200px;
  width: 100%;
  
  h2 {
    margin: 1rem 0;
  }

  p {
    margin: .5rem 0;
    line-height: 1.6;
  }

  h3 {
    margin-top: 3rem;
  }
`

export const ContentFooter = styled.div<ThemeProps>`
  align-items: center;
  margin-top: 8rem;

  img {
    width: 100px;
    filter: drop-shadow(0px 0px 1px rgb(35 35 35))
  }

  h2 {
    margin-right: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;

    a:nth-child(2) {
      transform: translateX(6px);
    }

    a {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      width: 150px;
      cursor: pointer;
      border: 0;
      border-radius: 6px;
      transition: all 0.2s;
      margin-top: 0.7rem;
      padding: 0.5rem;
      transition: 100ms;

      &:active {
        opacity: 1;
        transform: scale(0.98);
        text-shadow: 0 0 7px 1px ${(props) => props.theme['strong-orange']};
      }

      svg {
        margin-right: .5rem;
      }

      &:hover {
        transform: scale(1.05);
        text-shadow: 0 0 5px inherit;
        font-weight: bold;
        transform: translateX(12px);
      }

    }
    
  }
`
