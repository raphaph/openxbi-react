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
    props.variant === 'light' ? props.theme.offwhite : props.theme.black};

  background-size: 100%;
  border-bottom: 1px solid
    ${(props) =>
      props.variant === 'light'
        ? props.theme['gray-100']
        : props.theme['gray-900']};
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

  strong:first-of-type {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 500;
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
      rgba(52, 22, 227, 0.1),
      rgba(255, 140, 0, 0.1),
      rgba(41, 171, 226, 0.1)
    );

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    position: relative;
  }
`

export const ImageCodes = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  div {
    margin: 2rem 0;
  }

  img {
    border-radius: 8px;
    width: 95%;
    margin-top: 1rem;
    transition: 500ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`
