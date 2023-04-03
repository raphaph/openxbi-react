import {
  ContactInfo,
  FooterContainer,
  FooterContents,
  FooterMid,
  RightSideContent,
} from './styles'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'
import {
  CaretUp, Envelope, Heart
} from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function Footer() {
  const { themeValue } = useContext(AppContext)

  return (
    <FooterContainer>
      <FooterContents>
        <ContactInfo variant={themeValue}>
          <p>Mantido por </p><strong>Raphael Barros</strong>
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
          <a
            href="https://discord.gg/BTgztvKF7E"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" role="img" width="32" height="32" viewBox="1 -4 28 28"><path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path></svg>
            Discord
          </a>
        </ContactInfo>
        <FooterMid>
          <p>Ajude a manter a plataforma ativa, e crescer cada vez mais. 🥰</p>
          <a href="https://donate.stripe.com/9AQg2bcSydIMchieUU" target={'_blank'}>
            <button>Buy Me A Coffee </button>
            <Heart size={20} weight='fill' />
          </a>
          <a href="mailto:raphael@openxbi.com.br">Contato <Envelope size={20} weight='fill' /> </a>
          <p>Entre em contato para dúvidas, sugestões, bugs, envio ou ideias de componentes.</p>
        </FooterMid>
        <RightSideContent variant={themeValue}>

          <a href="#" aria-label="Subir até o topo da página">
            <button>
              Back to Top <CaretUp size={15} weight="bold" />
            </button>
          </a>

          <img src={themeValue === 'light' ? logoLight : logoDark} alt="logo" />
        </RightSideContent>
      </FooterContents>
      <p>Copyright © OpenXBI 2023.</p>
    </FooterContainer>
  )
}
