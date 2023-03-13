import {
  ContactInfo,
  FooterContainer,
  FooterContents,
  RightSideContent,
} from './styles'
import logoDark from '../../assets/logo-dark2.svg'
import logoLight from '../../assets/logo-light2.svg'
import {
  CaretUp,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function Footer() {
  const { themeValue } = useContext(AppContext)

  return (
    <FooterContainer>
      <FooterContents>
        <ContactInfo>
          <strong>Contact</strong>
          <a href="https://github.com/raphaph" target="_blank" rel="noreferrer">
            <GithubLogo size={20} weight="fill" /> GitHub
          </a>
          <a
            href="https://www.instagram.com/raphawb/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={20} weight="fill" /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-william-de-barros-789327137/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={20} weight="fill" />
            LinkedIn
          </a>
        </ContactInfo>
        <RightSideContent>
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
