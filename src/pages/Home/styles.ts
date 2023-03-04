import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background: linear-gradient(rgba(41, 171, 226, 0.05), rgba(0, 0, 0, 0.1));
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
    text-align: left;
    width: 50%;
    font-size: 4rem;
    text-shadow: 0px 0px 2px ${(props) => props.theme['gray-500']};
  }

  strong {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 300;
  }
`
