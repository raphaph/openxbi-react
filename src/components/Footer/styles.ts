import styled from 'styled-components'

interface ThemeProps {
  variant?: 'light' | 'dark' | null
}

export const FooterContainer = styled.footer<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 2;

  height: 18rem;
  padding: 2rem 1rem;

  p {
    color: ${(props) => props.theme['gray-500']};
    font-size: 13px;
  }
`

export const FooterContents = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  justify-content: space-between;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    margin: 0.5rem 0;
  }

  a {
    color: ${(props) => props.theme['blue-turq']};
    text-decoration: none;

    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: bold;
  }
`

export const RightSideContent = styled.div`
  button {
    padding: 0.3rem;
    margin-bottom: 1rem;

    font-size: 14px;
    font-weight: bold;

    border: 0;
    background: transparent;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['blue-turq']};
    }
  }
`
