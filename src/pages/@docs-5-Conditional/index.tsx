import { NavDocumentation } from '../../components/NavDocumentation'
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'
import { ConditionalContent, ConditionalDaxContainer, ConditionalText, SyntaxHighlighterConditional } from './styles'

export function ConditionalDax() {
    document.title = 'OpenXBI | Conditionals In Code'
    const { themeValue } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <ConditionalDaxContainer variant={themeValue}>
            <NavDocumentation />
            <ConditionalContent>
                <ConditionalText>
                    <h1>Utilizando Condicionais</h1>
                    <strong>Tutorial rápido para uso de condicionais dentro da medida do nosso componente.</strong>

                    <p>Para utilizar condicionais dentro do seu componente, trouxe duas opções.</p>

                    <p><strong>PRIMEIRA OPÇÃO</strong> - Utilizar condicional diretamente dentro do código com a seguinte sintaxe.</p>
                    <strong> [Value]</strong> Utilizado nestes exemplos, pode ser tanto uma medida quanto variável, ou até mesmo coluna em caso de iteração.
                    <SyntaxHighlighterConditional
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {'"<p style=\'color: " & IF( [Value] < 50000, "green", "red") & ";\'></p>"'}
                    </SyntaxHighlighterConditional>
                    <p>Observe que a condicional está dentro do código HTML substituindo a cor conforme o valor de [Value]. </p>

                    <p>Também podemos utilizar esta mesma condicional dentro de style.</p>
                    <SyntaxHighlighterConditional
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`"<html>...
<style>
    p {
        color: " & IF( [Value] < 50000, "green", "red") & "
    }
</style>"`}
                    </SyntaxHighlighterConditional>

                    <p><strong>Inclusão de código</strong> - Você pode utilizar condicional para gerar uma linha inteira de código também, retornando uma linha diferente para verdadeiro e outra para falso.</p>
                    <SyntaxHighlighterConditional
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`" & IF( [Value] > 1000, "<p>Pagamento reprovado, limite inferior a compra.</p>",
    "<p>Pagamento aprovado. Preparando pedido!</p>") & "`}
                    </SyntaxHighlighterConditional>
                    <hr />
                    <p><strong>SEGUNDA OPÇÃO</strong> - A segunda opção iremos armazenar o valor da condicional dentro de uma variável, e utilizar a variável dentro do código, veja a sintaxe.</p>
                    <SyntaxHighlighterConditional
                        variant={themeValue}
                        language="dax"
                        style={themeValue === 'light' ? coldarkCold : coldarkDark}
                        showLineNumbers
                        wrapLines
                    >
                        {`Medida = 

var cor_condicional = IF( [Value] < 1000, "green", "red")

return
"
<div>
    <p>Texto verde ou vermelho?</p>
<div>
<style>
p {
    color: '" & cor_condicional & "'
}
<style>
"
                        `}
                    </SyntaxHighlighterConditional>
                    <p>{'Observe que, definimos a condicional fora do código e utilizamos posteriormente dentro do style da tag <p>.'}</p>
                    <p><strong>Estas são duas opções de uso de condicionais que você pode aplicar dentro dos componentes.</strong></p>
                </ConditionalText>
            </ConditionalContent>
        </ConditionalDaxContainer>
    )
}