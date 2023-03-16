import { Code } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CookiesModal } from '../../components/CookiesModal'
import { AppContext } from '../../context/AppContext'
import {
  ComponentsContainer,
  FooterCardContent,
  HeaderContentsContainer,
  PageComponentsContainer,
} from './styles'
import axios from 'axios';


export function PageComponents() {
  document.title = 'OpenXBI | All components'
  const {
    themeValue,
    contentsNames,
    cookiesAccept,
    setCookiesAccept,
    setContentData,
    contentData
  } = useContext(AppContext)
  const apiKey = import.meta.env.AUTH_KEY

  useEffect(() => {

    async function FetchContents() {
      await axios
        .get("https://uxbi.com.br/api/contents/",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          },
        )
        .then((response) => response.data)
        .then((data) => setContentData(data))
    }
    FetchContents()

    const cookies = localStorage.getItem('cookies-accept')
    if (cookies === null) {
      setCookiesAccept(null)
    }
  })


  return (
    <PageComponentsContainer variant={themeValue}>
      {cookiesAccept === null ? <CookiesModal /> : null}
      <HeaderContentsContainer>
        <div>
          <h2>Componentes</h2>
          <p>Os componentes são HTML e CSS puro, caso queira experiementar os componentes com a linguagem DAX incorporada, baixe nossos <NavLink to="/templates"><strong>templates</strong></NavLink>. </p>
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
