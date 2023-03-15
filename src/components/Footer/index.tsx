import {
  ContactInfo,
  FooterContainer,
  FooterContents,
  RightSideContent,
} from './styles'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'
import {
  CaretUp
} from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function Footer() {
  const { themeValue } = useContext(AppContext)

  return (
    <FooterContainer>
      <FooterContents>
        <ContactInfo variant={themeValue}>
          <strong>Contact</strong>
          <a href="https://github.com/raphaph" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
            GitHub
          </a>
          <a
            href="https://www.instagram.com/raphawb/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path></svg>
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-william-de-barros-789327137/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
            LinkedIn
          </a>
        </ContactInfo>
        <RightSideContent variant={themeValue}>
          <button>
            <a href="#" aria-label="Subir até o topo da página">
              Back to Top <CaretUp size={15} weight="bold" />
            </a>
          </button>
          <img src={themeValue === 'light' ? logoLight : logoDark} alt="logo" />
        </RightSideContent>
      </FooterContents>
      <p>Copyright © OpenXBI 2023.</p>
    </FooterContainer>
  )
}
