import {
  ClickedBodyContainer,
  ClickedMainContent,
  CreatorInfoImg,
  DetailsSupport,
  SingleComponentContainer,
  SupportButton,
  SupportContainer,
  SyntaxContainer,
  SyntaxHighlighterHowToUse,
  SyntaxHighlighterStyle,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { coldarkDark, coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { BookBookmark, CopySimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


export function ClickedComponent() {

  const lastClicked: any = localStorage.getItem('lastClicked')
  const { themeValue, contentData, setContentData } = useContext(AppContext)
  const apiKey = import.meta.env.AUTH_KEY
  const [codigo, setCodigo] = useState('')
  const clickedName = lastClicked
    .slice(26, -5)
    .split('/src/components/@Contents/')

  document.title = `OpenXBI | ${clickedName}`



  async function FetchComponent() {
    await axios.get(`https://uxbi.com.br/api/contents/search/${clickedName}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.data)
      .then((data) => setContentData(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    // Code
    async function buscarCodigo() {
      const [response, text] = await Promise.all([
        fetch(lastClicked),
        fetch(lastClicked).then(response => response.text())
      ]);

      const html = text
        .replace(/<script.*RefreshRuntime.*<\/script>/s, '')
        .replace(/<script.*src="\/@vite\/client"><\/script>/s, '');

      setCodigo(html);
    }
    buscarCodigo()

    // API de inicio, traz os detalhes sobre os cards
    FetchComponent()

  }, [lastClicked, apiKey])

  function CopyCode() {
    navigator.clipboard.writeText(codigo)
    alert('Código copiado para sua área de transferência!')
  }

  return (
    <ClickedBodyContainer variant={themeValue}>
      <ClickedMainContent>
        <SingleComponentContainer variant={themeValue}>
          <h2>{`${lastClicked
            .slice(26, -5)
            .split('/src/components/@Contents/')}`}</h2>
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
            wrapLines>
            {codigo}
          </SyntaxHighlighterStyle>
        </SyntaxContainer>
        <SupportContainer>
          <DetailsSupport>
            <summary>Como utilizar</summary>
            <div>
              <p>
                1. Copie o código, e cole em uma medida DAX dentro de aspas duplas
              </p>
              <SyntaxHighlighterHowToUse
                variant={themeValue}
                language="dax"
                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                wrapLines>
                {`medida = "<h1 class='title'>Hello</h1>"`}
              </SyntaxHighlighterHowToUse>
            </div>
            <div>
              <p>
                2. Incorpore o código HTML e CSS com medidas e variáveis DAX utilizando a seguinte sintaxe:
              </p>
              <SyntaxHighlighterHowToUse
                variant={themeValue}
                language="dax"
                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                wrapLines>
                {`medida = 
var greetings = "Hello"
return
"<h1>"&greetings&"</h1>"`}
              </SyntaxHighlighterHowToUse>

            </div>
            <div>
              <p>
                3. Quanto mais incorporar seu código com variáveis que se
                adaptam conforme os dados mudam no seu dashboard,
                mais inteligentes ficarão os componentes.
              </p>
            </div>
            <SupportButton>
              <strong>
                Caso tenha dúvidas acesse a documentação.
              </strong>
              <button>
                <NavLink to="/docs/introduction">
                  <BookBookmark />
                  Documentação
                </NavLink>
              </button>
            </SupportButton>
          </DetailsSupport>
        </SupportContainer>
      </ClickedMainContent>
    </ClickedBodyContainer>
  )
}
