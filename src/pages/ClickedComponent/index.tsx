import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {
  ClickedBodyContainer,
  ClickedMainContent,
  CreatorInfoImg,
  DetailsSupport,
  SingleComponentContainer,
  SupportButton,
  SupportContainer,
  SyntaxContainer,
  SyntaxHighlighterStyle,
} from './styles'

import {
  coldarkDark,
  coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ArrowRight, BookBookmark, CopySimple } from 'phosphor-react'
import axios from 'axios'

interface ContentDataProps {
  id: string
  name: string
  path: string
  type: string
  creator: string
  description: string
}

export function ClickedComponent() {

  const [contentData, setContentData] = useState<ContentDataProps>({
    id: '',
    name: '',
    path: '',
    type: '',
    creator: '',
    description: '',
  })

  const lastClicked: any = localStorage.getItem('lastClicked')
  const { themeValue } = useContext(AppContext)
  const apiKey = import.meta.env.AUTH_KEY
  const [codigo, setCodigo] = useState('')

  useEffect(() => {
    async function buscarCodigo() {
      const response = await fetch(lastClicked)
      const html = await (await response.text())
        .replace(/<script.*RefreshRuntime.*<\/script>/s, '')
        .replace(/<script.*src="\/@vite\/client"><\/script>/s, '')
      setCodigo(html)
    }
    buscarCodigo()

    // API de inicio, traz os detalhes sobre os cards
    async function FetchContents() {
      await axios
        .get(
          `https://uxbi.com.br/api/contents/search/${lastClicked
            .slice(26, -5)
            .split('/src/components/@Contents/')}`,
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
  }, [lastClicked, apiKey])

  document.title = `OpenXBI | ${contentData.name}`

  function CopyCode() {
    navigator.clipboard.writeText(codigo)
    alert('Código copiado para sua área de transferência!')
  }

  return (
    <ClickedBodyContainer variant={themeValue}>
      <ClickedMainContent>
        <SingleComponentContainer variant={themeValue}>
          <h2>{contentData.name}</h2>
          <div>
            <iframe src={lastClicked} frameBorder={0} height={300}></iframe>
          </div>
          <p>{contentData.description}</p>
          <CreatorInfoImg variant={themeValue}>
            <img src={`https://github.com/${contentData.creator}.png`} alt="" width={10} />
            <a href={`https://github.com/${contentData.creator}`} target={'_blank'}><small>Criado por <br />@{contentData.creator}</small></a>
          </CreatorInfoImg>
        </SingleComponentContainer>
        <SyntaxContainer>
          <div>
            <h2>Code</h2>
            <button onClick={() => CopyCode()}>
              Copy Code <CopySimple weight="fill" />
            </button>
          </div>

          <SyntaxHighlighterStyle
            variant={themeValue}
            language="html"
            style={themeValue === 'light' ? coldarkCold : coldarkDark}
            showLineNumbers
            wrapLines
          >
            {codigo}
          </SyntaxHighlighterStyle>
        </SyntaxContainer>
        <SupportContainer>
          <DetailsSupport>
            <summary>Como utilizar</summary>
            <div>
              <p>
                1. Copie o código, e cole em uma medida DAX dentro de aspas
                duplas
              </p>
              <p>
                {' '}
                <strong>
                  Exemplo <ArrowRight />
                </strong>{' '}
                <code>{`medida = "<div></div>"`}</code>{' '}
              </p>
            </div>
            <div>
              <p>
                2. Incorpore o código HTML e CSS com medidas e variáveis DAX
                utilizando a seguinte sintaxe: &variavel/medida&
              </p>
              <p>
                {' '}
                <strong>
                  Exemplo <ArrowRight />
                </strong>{' '}
                <code>{`"<p> "&variavel/medida&" </p>"`}</code>
              </p>
            </div>
            <div>
              <p>
                3. Quanto mais incorporar seu código com variáveis que se
                adaptam conforme os dados mudam no seu dashboard, <br />
                mais interessante ficarão os componentes
              </p>
            </div>
            <SupportButton>
              <strong>
                Caso queira ver um exemplo mais prático, clique abaixo!
              </strong>
              <button>
                <BookBookmark />
                Documentation
              </button>
            </SupportButton>
          </DetailsSupport>
        </SupportContainer>
      </ClickedMainContent>
    </ClickedBodyContainer>
  )
}
