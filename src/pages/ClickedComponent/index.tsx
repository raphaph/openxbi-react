import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { ClickedBodyContainer, ClickedContentSupport, ClickedMainContent, SingleComponentContainer, SupportButton, SyntaxContainer, SyntaxHighlighterStyle } from "./styles"
import { coldarkDark, coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ArrowArcRight, ArrowLeft, ArrowRight, Copy, Copyright, CopySimple } from "phosphor-react"

export function ClickedComponent() {
  const lastClicked: any = localStorage.getItem('lastClicked')

  const { themeValue } = useContext(AppContext)

  const [codigo, setCodigo] = useState('');

  useEffect(() => {
    async function buscarCodigo() {
      const resposta = await fetch(lastClicked);
      const texto = await (await (await (await resposta.text())
      .replace(/<script.*RefreshRuntime.*<\/script>/s, "")
      .replace(/<script.*src="\/@vite\/client"><\/script>/s, "")));
      setCodigo(texto); 
    }
    buscarCodigo();
  }, []);
  
  function CopyCode() {
    navigator.clipboard.writeText(codigo)
    alert('Código copiado para sua área de transferência!')
  }

  return (
    <ClickedBodyContainer variant={themeValue}>
      <ClickedMainContent>
        <SingleComponentContainer>
          <h2>{lastClicked.slice(0, -5).split('/src/components/@Contents/')}</h2>
          <div>
            <iframe
              src={lastClicked}
              frameBorder={0}
              height={300}
            ></iframe>
          </div>
        </SingleComponentContainer>
        <SyntaxContainer>
          <div>
            <h2>Code</h2>
            <button onClick={() => CopyCode()}>Copy Code <CopySimple weight="fill"/></button>
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
      </ClickedMainContent>
      <ClickedContentSupport>
        <summary>Como utilizar</summary>
        <div>
          <p>1. Copie o código, e cole em uma medida DAX dentro de aspas duplas (" ")</p>
          <p> <strong>Exemplo <ArrowRight /></strong> <code>{`medida = "<div></div>"`}</code> </p>
        </div>
        <div>
          <p>2. Incorpore o código HTML e CSS com medidas e variáveis DAX utilizando a seguinte sintaxe: "&variavel/medida&"</p>
          <p> <strong>Exemplo <ArrowRight /></strong>  <code>{`"<p> "&variavel/medida&" </p>"`}</code></p>
        </div>
        <div>
          <p>3. Quanto mais incorporar seu código com variáveis que se adaptam conforme os dados mudam no seu dashboard, <br />
           mais interessante ficarão os componentes</p>
        </div>
        <SupportButton>
        <strong>Caso queira ver um exemplo mais prático, clique abaixo!</strong>
        <button>HowToUse</button>
      </SupportButton>
      </ClickedContentSupport>
      
    </ClickedBodyContainer>
)}
