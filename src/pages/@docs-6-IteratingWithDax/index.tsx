import { NavDocumentation } from '../../components/NavDocumentation'
import {
    coldarkDark,
    coldarkCold,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'
import { IteratingDaxContainer, IteratingText, IterationContent, SyntaxHighlighterIterating } from './styles'
import { TableContainer } from '../@docs-4-DaxFormatting/styles'
import result from '../../assets/iterating/1.png'

const iterating_complete = `measure = 

var iterating_table = CONCATENATEX(age_range, "
<div class='card'>
    <p style='font-weight: bold'>" & [Title] & "</p> 
    <p>" & [Count] & "</p>
</div>    
")

return
"
<div class='container'>
    "& iterating_table &"
</div>

<style>
.container {display: flex;}
.card {   
    border-radius: 6px;
    background: #FF8C00;
    margin: 2%;
    padding: 1%;
    width: 150px;
}

p {
    text-align: center;
    color: white;
}
</style>
"`

export function IteratingDax() {
    document.title = 'OpenXBI | Iterating With Dax'
    const { themeValue, languageSelect } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <IteratingDaxContainer variant={themeValue}>
            <NavDocumentation />
            <IterationContent>
                <IteratingText>
                    {languageSelect === 'pt' ? <>
                        <h1>Iterando uma tabela com DAX</h1>
                        <strong>Este tutorial ensina como repetir uma linhas, iterando uma tebela utilizando CONCATENATEX.</strong>

                        <p>Iterar uma tabela e retornar linhas html pode ser utilizado em diversos casos, como reproduzir uma tabela com muitas linhas em html sem ter que escrever cada linha manualmente,
                            repetir cards para cada título e valor, criar barras laterais ou colunas, repetir objetos dentro de uma tag svg, e muito mais necessidade e criatividade.  </p>

                        <p>Sintaxe do <strong>CONCATENATEX</strong>, que iremos utilizar:</p>
                        <SyntaxHighlighterIterating
                            variant={themeValue}
                            language="dax"
                            style={themeValue === 'light' ? coldarkCold : coldarkDark}
                            showLineNumbers
                            wrapLines
                        >
                            {'CONCATENATEX(<table>, <expression>)'}
                        </SyntaxHighlighterIterating>

                        <p>Tabela simples utilizada no exemplo:</p>
                        <TableContainer variant={themeValue}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>adults</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>young</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>children</td>
                                        <td>7</td>
                                    </tr>

                                </tbody>

                            </table>
                        </TableContainer>
                        <p><strong>1ª ETAPA</strong> - Iniciaremos criando uma variavel dentro do componente utilizando CONCATENATEX para iterar a tabela e retornar uma linhas de código.</p>
                        <SyntaxHighlighterIterating
                            variant={themeValue}
                            language="dax"
                            style={themeValue === 'light' ? coldarkCold : coldarkDark}
                            showLineNumbers
                            wrapLines
                        >
                            {`Medida =
var iterating_table = CONCATENATEX(age_range, 
"
<div class='card'>
    <p style='font-weight: bold'>" & [Title] & "</p> 
    <p>" & [Count] & "</p>
</div>    
")`}
                        </SyntaxHighlighterIterating>
                        <p>Observe que o primeiro argumento é a tabela [age-range], e o segundo, entre aspas duplas, o código HTML com valores referente as colunas da tabela, o código em questão repetira dentro da variável para cada linha da tabela.</p>

                        <p><strong>2ª ETAPA</strong> - Na segunda etapa iremos incluir a variável dentro do código.</p>
                        <SyntaxHighlighterIterating
                            variant={themeValue}
                            language="dax"
                            style={themeValue === 'light' ? coldarkCold : coldarkDark}
                            showLineNumbers
                            wrapLines
                        >
                            {`return
"
<div class='container'>
    "& iterating_table &"
</div>
"`}
                        </SyntaxHighlighterIterating>
                        <p>Neste caso <strong>iterating_table</strong> irá repetir conforme quantidade de linhas que houver na tabela [age_range].</p>

                        <p>Abaixo segue o resultado do código, e a estrutura final do componente (style opcional):</p>
                        <img src={result} alt="" />
                        <SyntaxHighlighterIterating
                            variant={themeValue}
                            language="dax"
                            style={themeValue === 'light' ? coldarkCold : coldarkDark}
                            showLineNumbers
                            wrapLines
                        >
                            {iterating_complete}
                        </SyntaxHighlighterIterating>
                        <p>Neste tutorial você aprendeu uma forma de iterar tabela e html dentro da linguagem DAX.</p>
                        <p>Caso queira acessar a documentação completa sobre <strong>CONCATENATEX</strong>, <a href="https://learn.microsoft.com/pt-br/dax/concatenatex-function-dax" target={'_blank'} rel="noreferrer">clique aqui</a></p>
                    </> :
                        <>
                            <h1>Iterating through a table with DAX</h1>
                            <strong>This tutorial teaches how to iterate through a table using CONCATENATEX to repeat rows.</strong>
                            <p>Iterating through a table and returning HTML rows can be used in various cases, such as reproducing a table with many rows in HTML without having to manually write each row,
                                repeating cards for each title and value, creating sidebars or columns, repeating objects within an SVG tag, and much more as needed and creatively.</p>

                            <p>Syntax for <strong>CONCATENATEX</strong>, which we will be using:</p>
                            <SyntaxHighlighterIterating
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {'CONCATENATEX(<table>, <expression>)'}
                            </SyntaxHighlighterIterating>

                            <p>Simple table used in the example:</p>
                            <TableContainer variant={themeValue}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>adults</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>young</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>children</td>
                                            <td>7</td>
                                        </tr>

                                    </tbody>

                                </table>
                            </TableContainer>
                            <p><strong>STEP 1</strong> - We will start by creating a variable within the component using CONCATENATEX to iterate through the table and return a line of code.</p>
                            <SyntaxHighlighterIterating
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {`Medida =
var iterating_table = CONCATENATEX(age_range, 
"
<div class='card'>
    <p style='font-weight: bold'>" & [Title] & "</p> 
    <p>" & [Count] & "</p>
</div>    
")`}
                            </SyntaxHighlighterIterating>
                            <p>Note that the first argument is the [age-range] table, and the second, in double quotes, is the HTML code with values referring to the columns of the table, the code in question will repeat within the variable for each row of the table.</p>
                            <p><strong>STEP 2</strong> - In the second step, we will include the variable within the code.</p>
                            <SyntaxHighlighterIterating
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {`return
"
<div class='container'>
    "& iterating_table &"
</div>
"`}
                            </SyntaxHighlighterIterating>
                            <p>In this case, <strong>iterating_table</strong> will repeat according to the number of rows in the [age_range] table.</p>
                            <p>Below is the result of the code and the final structure of the component (optional style):</p>
                            <img src={result} alt="" />
                            <SyntaxHighlighterIterating
                                variant={themeValue}
                                language="dax"
                                style={themeValue === 'light' ? coldarkCold : coldarkDark}
                                showLineNumbers
                                wrapLines
                            >
                                {iterating_complete}
                            </SyntaxHighlighterIterating>
                            <p>In this tutorial, you have learned a way to iterate tables and HTML within the DAX language.</p>
                            <p>If you want to access the complete documentation on <strong>CONCATENATEX</strong>, <a href="https://learn.microsoft.com/pt-br/dax/concatenatex-function-dax" target={'_blank'} rel="noreferrer">click here</a>.</p>
                        </>
                    }
                </IteratingText>
            </IterationContent>
        </IteratingDaxContainer>
    )
}