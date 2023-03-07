import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  height: auto;
  
`

export const MainContentOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  max-width: 1400px;

  h1 {
    margin: 5rem 0 1rem 0;
    width: 60%;

    text-align: left;
    font-size: 4rem;
    text-shadow: 0px 0px 2px ${(props) => props.theme['gray-500']};
  }

  strong {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 300;
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
    
    background: linear-gradient( -15deg,rgba(52,	22,	227,.1),rgba(255, 140, 0, 0.1) ,rgba(41, 171, 226,0.1));
    
    width: 25rem;
    height: 25rem;
    border-radius: 6px;
  }
`