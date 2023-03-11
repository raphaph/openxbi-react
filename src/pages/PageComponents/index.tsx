import { Code } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import {
  ComponentsContainer,
  FooterCardContent,
  HeaderContentsContainer,
  PageComponentsContainer,
} from './styles'

export function PageComponents() {
  document.title = 'OpenXBI | All components'
  const { themeValue, contentsNames } = useContext(AppContext)

  return (
    <PageComponentsContainer variant={themeValue}>
      <HeaderContentsContainer>
        <div>
          <h2>Componentes</h2>
        </div>
      </HeaderContentsContainer>
      <ComponentsContainer variant={themeValue}>
        {contentsNames.map((content) => {
          return (
            <main key={content}>
              <div>
                <iframe src={content} frameBorder={0} height={300}></iframe>
              </div>
              <FooterCardContent variant={themeValue}>
                <strong>
                  {content.slice(0, -5).split('/src/components/@Contents/')}
                </strong>
                <button
                  onClick={() => localStorage.setItem('lastClicked', content)}
                >
                  <NavLink to="/componentCode" title="services">
                    <Code size={15} color="orange" weight="bold" />
                    <p>HTML & CSS</p>
                  </NavLink>
                </button>
              </FooterCardContent>
            </main>
          )
        })}
      </ComponentsContainer>
    </PageComponentsContainer>
  )
}
