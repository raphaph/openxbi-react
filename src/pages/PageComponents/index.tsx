import { Code } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CookiesModal } from '../../components/CookiesModal'
import { AppContext } from '../../context/AppContext'
import {
  ComponentsContainer,
  FooterCardContent,
  HeaderContentsContainer,
  PageComponentsContainer,
} from './styles'
import axios from 'axios'

interface ContentDataProps {
  id: string
  name: string
  path: string
  type: string
  creator: string
  description: string
}

export function PageComponents() {
  document.title = 'OpenXBI | All components'
  const {
    themeValue,
    cookiesAccept,
    setCookiesAccept,
  } = useContext(AppContext)

  const [filteredData, setFilteredData] = useState<ContentDataProps[]>([])

  const apiKey = import.meta.env.AUTH_KEY

  const [filtered, setFiltered] = useState('all')

  async function FetchFilteredContent(all: string, filter: string) {
    if (all === 'all') {
      await axios.get(`https://uxbi.com.br/api/contents`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
        .then((response) => response.data.contents)
        .then((data) => {
          setFilteredData(data)
        })
    } else {
      await axios.get(`https://uxbi.com.br/api/contents/type/${filter}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
        .then((response) => response.data)
        .then((data) => {
          setFilteredData(data)
        })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    FetchFilteredContent(filtered, filtered)
    const cookies = localStorage.getItem('cookies-accept')
    if (cookies === null) {
      setCookiesAccept(null)
    }

  }, [filtered])


  return (
    <PageComponentsContainer variant={themeValue}>
      {cookiesAccept === null ? <CookiesModal /> : null}
      <HeaderContentsContainer>
        <div>
          <h2>Componentes</h2>
          <p>Os componentes são HTML e CSS puro, caso queira experiementar os componentes com a linguagem DAX incorporada, baixe nossos <NavLink to="/templates"><strong>templates</strong></NavLink>. </p>
          <section>
            <button onClick={() => setFiltered('all')}>All</button>
            <button onClick={() => setFiltered('card')}>Card</button>
            <button onClick={() => setFiltered('chart')}>Chart</button>
            <button onClick={() => setFiltered('table')}>Table</button>
          </section>
        </div>
      </HeaderContentsContainer>
      <ComponentsContainer variant={themeValue}>
        {filteredData.map(content => {
          return (
            <main key={content.id}>
              <div>
                <iframe src={content.path} frameBorder={0} height={300}></iframe>
              </div>
              <FooterCardContent variant={themeValue}>
                <strong>
                  {content.name}
                </strong>
                <button
                  onClick={() => localStorage.setItem('lastClicked', content.path)}
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
