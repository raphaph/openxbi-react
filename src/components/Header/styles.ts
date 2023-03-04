import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid white;

  img {
    height: 2.5rem;
  }
`

export const HeaderSideRight = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }
`
