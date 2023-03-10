import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import {
  ComponentsContainer,
  FooterCardContent,
  HeaderContentsContainer,
} from './styles'

export function PageComponents() {
  document.title = 'OpenXBI | All components'
  const { themeValue, contentsNames, clickedContent, setClickedContent } =
    useContext(AppContext)

  return (
    <>
      <HeaderContentsContainer variant={themeValue}>
        <div>
          <h2>Componentes</h2>
        </div>
      </HeaderContentsContainer>
      <ComponentsContainer variant={themeValue}>
        {contentsNames.map((content) => {
          return (
            <main>
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
                    <span>HTML</span> & <span>CSS</span>
                  </NavLink>
                </button>
              </FooterCardContent>
            </main>
          )
        })}
      </ComponentsContainer>
    </>
  )
}
