import { NavDocumentation } from '../../components/NavDocumentation'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'
import { EmbeddingContent, EmbeddingDaxContainer, EmbeddingText, SyntaxHighlighterEmbedding } from './styles'
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

const code_card_blur1 = `card_blur = 

var security = FORMAT( 15583.65, "Currency", "en-US")
var storate = FORMAT( 113.47, "Currency", "en-US")
var identity = FORMAT( 3111.54, "Currency", "en-US")
var network = FORMAT( 15290.41, "Currency", "en-US")
// Em caso de dúvida sobre o FORMAT, consulte a documentação acima!

return
"
<div class='container'>
    <div class='card'>
        <strong>Net value</strong>
        <p> $5.958.598,10</p>
    </div>
    <div class='card'>
        <strong>Gross value</strong>
        <p>$10.244.870,55</p>
    </div>
    <div class='card'>
        <strong>Margin</strong>
        <p>$500.348,90</p>
    </div>
</div>
<styles....
"`

const code_card_blur2 = `card_blur = 

var security = FORMAT( 15583.65, "Currency", "en-US")
var storate = FORMAT( 113.47, "Currency", "en-US")
var identity = FORMAT( 3111.54, "Currency", "en-US")
var network = FORMAT( 15290.41, "Currency", "en-US")
// Em caso de dúvida sobre o FORMAT, consulte a documentação acima!

return
"
<div class='container'>
    <div class='card'>
        <strong>Security</strong>
        <p> " & security & " </p>
    </div>
    <div class='card'>
        <strong>Storage</strong>
        <p> " & storate & " </p>
    </div>
    <div class='card'>
        <strong>Network</strong>
        <p> " & network & " </p>
    </div>
</div>
<styles....
"`

export function EmbeddingDax() {
    document.title = 'OpenXBI | Embedding Dax'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <EmbeddingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <EmbeddingContent>
                <EmbeddingText>
                    <h1>Incorporando DAX ao código</h1>
                    <strong>Tutorial simples de incorporação de variáveis ou medidas, para projetos mais complexos, pode demandar conhecimentos médio ao avançado em DAX.</strong>

                    <p>Para incorporação de medidas e variáveis, primeiro importe um componente DAX: <strong>card-blur</strong> será utilizado neste tutorial.</p>

                    <p><strong>1ª etapa</strong> - Com o componente importado, acima das aspas duplas iremos adicionar variáveis e um return, que contem a seguinte sintaxe:</p>
                    <SyntaxHighlighterEmbedding
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {'var var_nome = "valor de retorno"'}
                    </SyntaxHighlighterEmbedding>
                    <p>Com as variáveis criadas a medida do seu componente deverá ficar assim:</p>
                    <SyntaxHighlighterEmbedding
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {code_card_blur1}
                    </SyntaxHighlighterEmbedding>

                    <hr />
                    <p><strong>2ª etapa</strong> - Nesta segunda etapa iremos incluir as variáveis criadas dentro do nosso código.</p>

                    <p>Utilizando a seguinte sintaxe, iremos substituir valores dentro do nosso código html.</p>
                    <SyntaxHighlighterEmbedding
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {'" & var_nome & "'}
                    </SyntaxHighlighterEmbedding>

                    <p>Código com as variáveis:</p>
                    <SyntaxHighlighterEmbedding
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {code_card_blur2}
                    </SyntaxHighlighterEmbedding>
                    <p><strong>Para caso de uso de medidas, apenas substitua a variável pela medida dentro da sintaxe.</strong></p>
                    <p>{'Repare que, substituimos nome dos cards dentro da tag <strong> manualmente, e dentro da tag <p> onde continham os valores fixos, substituimos pelas variáveis, "& security &", " & storage & " e "& network &", todas dentro de "& &".'}</p>

                    <p><strong>E é isso, seu componente agora possui variáveis e medidas DAX incorporada.</strong></p>
                </EmbeddingText>
            </EmbeddingContent>
        </EmbeddingDaxContainer>
    )
}